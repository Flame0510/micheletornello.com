#!/usr/bin/env node
/**
 * qa-screenshot.js — QA visivo automatizzato per micheletornello.com
 * Usage: node scripts/qa-screenshot.js [options]
 *
 * Options:
 *   --port 3000                     Dev server port (default: 3000)
 *   --sections hero,lavori,servizi  Section IDs to screenshot (default: all)
 *   --viewports mobile,desktop      Viewport presets (default: desktop)
 *   --output assets/qa              Output directory (default: assets/)
 *   --prefix sprint-12              File prefix (default: qa)
 *   --wait 1500                     ms to wait after scroll for animations (default: 1200)
 *   --full-page                     Also capture full-page screenshot
 */

const { chromium } = require('../node_modules/playwright');
const http = require('http');
const path = require('path');
const fs = require('fs');

// --- Config ---
const args = process.argv.slice(2).reduce((acc, val, i, arr) => {
  if (val.startsWith('--')) {
    const key = val.slice(2);
    const next = arr[i + 1];
    acc[key] = (!next || next.startsWith('--')) ? true : next;
  }
  return acc;
}, {});

const PORT = args.port || 3000;
const BASE_URL = `http://localhost:${PORT}`;
const WAIT_MS = parseInt(args.wait || '1200', 10);
const OUTPUT_DIR = path.resolve(__dirname, '..', args.output || 'assets');
const PREFIX = args.prefix || 'qa';
const FULL_PAGE = args['full-page'] || false;

const VIEWPORT_PRESETS = {
  mobile:  { width: 375,  height: 812  },
  tablet:  { width: 768,  height: 1024 },
  desktop: { width: 1440, height: 900  },
};

const ALL_SECTIONS = ['lavori', 'chi-sono', 'academy', 'contatto'];

const requestedSections = args.sections
  ? args.sections.split(',').map(s => s.trim())
  : ALL_SECTIONS;

const requestedViewports = args.viewports
  ? args.viewports.split(',').map(v => v.trim())
  : ['desktop'];

// --- Helpers ---
function waitForServer(port, retries = 15, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const check = () => {
      http.get(`http://localhost:${port}`, res => {
        resolve();
      }).on('error', () => {
        attempts++;
        if (attempts >= retries) return reject(new Error(`Server not ready on port ${port} after ${retries}s`));
        setTimeout(check, delay);
      });
    };
    check();
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// --- Main ---
(async () => {
  console.log(`\n🔍 QA Screenshot — micheletornello.com`);
  console.log(`   Port: ${PORT} | Sections: ${requestedSections.join(', ')} | Viewports: ${requestedViewports.join(', ')}`);
  console.log(`   Output: ${OUTPUT_DIR}\n`);

  // Ensure output dir
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Wait for dev server
  process.stdout.write('⏳ Waiting for dev server...');
  await waitForServer(PORT);
  console.log(' ready ✅');

  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle'],
  });

  const results = [];
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 16);

  for (const viewportName of requestedViewports) {
    const viewport = VIEWPORT_PRESETS[viewportName];
    if (!viewport) {
      console.warn(`⚠️  Unknown viewport "${viewportName}", skipping.`);
      continue;
    }

    const ctx = await browser.newContext({ viewport });
    // Skip PageLoader animation
    await ctx.addInitScript(() => sessionStorage.setItem('mt_visited', '1'));

    const page = await ctx.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await sleep(500);

    for (const section of requestedSections) {
      process.stdout.write(`  📸 [${viewportName}] #${section}...`);

      // Full-page once per viewport
      if (section === requestedSections[0] && FULL_PAGE) {
        const fullPath = path.join(OUTPUT_DIR, `${PREFIX}_fullpage_${viewportName}_${timestamp}.jpg`);
        await page.screenshot({ path: fullPath, type: 'jpeg', quality: 88, fullPage: true });
        results.push(fullPath);
        console.log(` full-page saved`);
      }

      // Scroll to section (supports id or .class selector)
      const scrolled = await page.evaluate((sel) => {
        const el = sel.startsWith('.')
          ? document.querySelector(sel)
          : document.getElementById(sel) || document.querySelector(`[id="${sel}"]`);
        if (!el) return false;
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        return true;
      }, section);

      if (!scrolled) {
        console.log(` ⚠️  #${section} not found, skipping`);
        continue;
      }

      // Wait for animations
      await sleep(WAIT_MS);

      const filePath = path.join(OUTPUT_DIR, `${PREFIX}_${section}_${viewportName}_${timestamp}.jpg`);
      await page.screenshot({ path: filePath, type: 'jpeg', quality: 88 });
      results.push(filePath);
      console.log(` ✅`);
    }

    await ctx.close();
  }

  await browser.close();

  // JSON manifest
  const manifest = {
    timestamp,
    port: PORT,
    sections: requestedSections,
    viewports: requestedViewports,
    waitMs: WAIT_MS,
    files: results,
  };
  const manifestPath = path.join(OUTPUT_DIR, `${PREFIX}_manifest_${timestamp}.json`);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n✅ Done — ${results.length} screenshot(s) saved`);
  console.log(`   Manifest: ${manifestPath}\n`);
  results.forEach(f => console.log(`   ${path.basename(f)}`));
})().catch(err => {
  console.error(`\n❌ Error: ${err.message}`);
  process.exit(1);
});
