// const puppeteer =require('puppeteer')

// const scrapeAirAlerts = async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://www.nbcnews.com/california-drought')


//     const scrapedData = await page.evaluate(() =>
//     Array.from(
//         document.querySelectorAll('.field-content a:first-child')
//         )
//         .map(link => ({
//             title: link.textContent,
//             link: `https://www.nbcnews.com/california-drought{link.getAttribute('href)}`,
//             picture: `https://media.wired.com/photos/5926fea0cfe0d93c47432088/master/pass/LA-river-drought-507138608.jpg`
//         }))
//         )
//         await browser.close()
//         return scrapedData
    


// }

// const scrapeAir = async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto(`https://www.latimes.com/search?q=drought&f0=00000163-01e2-d9e5-adef-33e2984a0000&f0=0000016a-b70e-dd5c-abfe-bf3f7b290000&f0=00000168-8692-d5d8-a76d-efdb7d3c0000&f1=0000016a-ea2d-db5d-a57f-fb2dc8680000&s=0`)

//     const scrapedData = await page.evaluate(() => {
//         const scrapedMedia = Array.from(document.querySelectorAll('.PromoMedium-wrapper'))
//         let fullArr = []
//         for( let i=0; i< scrapedMedia.length ; i++){
//             // fullArr[i] = {
            
//             }
//         }
//     })

// }

