const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://amznpro.review');
  
  page.on('console', (...args) => {
    let lastTime = 1;
    const minute = 60;
    const hour = 60;
    const day = 24;
    const interval = setInterval(() => {
      if (lastTime === (5 * minute)) {
        clearInterval(interval)
        browser.close()
      }
      console.log(`Run Time: ${Date.now()} ${lastTime} seconds`)
      lastTime++
    }, 1000);
  });
  await page.evaluate(() => console.log('test'));
})();