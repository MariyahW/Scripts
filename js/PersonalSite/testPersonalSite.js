const pup = require('puppeteer');

function test(){
    automateDownload();
}

async function automateDownload(){
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1100, height: 800});
    await page.goto('https://mariyahwatson.com/');
    await page.click('#downloadNav');
    
}

test();