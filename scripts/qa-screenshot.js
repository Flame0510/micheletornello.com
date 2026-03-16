const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const sections = ['hero', 'chi-sono', 'lavori', 'enterprise', 'academy', 'contatto'];
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 }
];

async function run() {
  const args = process.argv.slice(2);
  const sectionFilter = args.includes('--sections') ? args[args.indexOf('--sections') + 1].split(',') : sections;
  const viewportFilter = args.includes('--viewports') ? args[args.indexOf('--viewports') + 1].split(',') : viewports.map(v => v.name);
  const prefix = args.includes('--prefix') ? args[args.indexOf('--prefix') + 1] : 'qa';
  const waitTime = args.includes('--wait') ? parseInt(args[args.indexOf('--wait') + 1]) : 1000;

  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  // Skip PageLoader
  await context.addInitScript(() => {
    sessionStorage.setItem('mt_visited', '1');
  });

  const page = await context.newPage();
  
  console.log('Navigating to http://localhost:3000...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  } catch (e) {
    console.error('Failed to connect to localhost:3000. Is the dev server running?');
    process.exit(1);
  }

  const assetsDir = path.join(__dirname, '..', 'assets');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

  for (const vp of viewports.filter(v => viewportFilter.includes(v.name))) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    console.log(`Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    
    // Wait for animations
    await page.waitForTimeout(waitTime);

    for (const sectionId of sectionFilter) {
      const element = await page.$(`#${sectionId}`);
      if (element) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 16);
        const filename = `${prefix}_${sectionId}_${vp.name}_${timestamp}.jpg`;
        const filepath = path.join(assetsDir, filename);
        
        await element.screenshot({ path: filepath, type: 'jpeg', quality: 80 });
        console.log(`  Captured: ${filename}`);
      } else {
        console.warn(`  Section #${sectionId} not found`);
      }
    }
  }

  await browser.close();
  console.log('Done.');
}

run();
