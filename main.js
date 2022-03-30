const cheerio = require("cheerio")
//const { parseHTML } = require("cheerio/lib/static")
// const{parse} = require("path")
const request = require("request")
request("https://www.worldometers.info/coronavirus/", resp)
function resp(err, response, html) {
    if (err) {
     console.log(err)
    } else {
        extracthtml(html)

    }
}
function extracthtml(html) {
    let parseHTML =cheerio.load(html)
console.log(parseHTML)
 }
 let contentarr = parseHTML(".maincounter-number span").text()
 console.log(contentarr)
// let totalcases = parseHTML(contentarr[0]).text()
// letdeaths = parseHTML(contentarr[1]).text()
// let recovered = $(contentarr[2]).text()
// console.log(`totalCovidcases = parseHTML{totalcases}
//             totalDeath = PARSEHTML{totaldeaths}
//             Recovered  = PARSEHTML{recovered}`)
