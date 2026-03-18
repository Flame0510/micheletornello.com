const { chromium } = require('./node_modules/playwright');
(async () => {
  const browser = await chromium.launch();
  for (const w of [390, 1280]) {
    const page = await browser.newPage();
    await page.addInitScript(() => sessionStorage.setItem('mt_visited','1'));
    await page.setViewportSize({ width: w, height: 900 });
    await page.goto('http://localhost:3005', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    // scrolla alla sezione portfolio
    await page.evaluate(() => {
        const el = document.querySelector('#lavori,#portfolio,[id*="portfolio"]');
        if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `/tmp/portfolio-parity-${w}.jpg`, type: 'jpeg', quality: 90 });
    await page.close();
  }
  await browser.close();
})();
