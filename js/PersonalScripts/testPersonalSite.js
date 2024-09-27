const pup = require('puppeteer');

function test(){
    // automateDownload();

    automateGoogleSearch('how to create an automation script');
}

async function automateDownload(){
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1100, height: 800});
    await page.goto('https://mariyahwatson.com/');
    await page.click('#downloadNav');
    
}

async function automateGoogleSearch(searchTerm){
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1100, height: 800});
    await page.goto('https://google.com');
    await page.type('#APjFqb.gLFyf', searchTerm);
    await page.click('.gNO89b');
}

test();