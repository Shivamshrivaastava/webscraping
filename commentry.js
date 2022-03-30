const cheerio = require("cheerio")
const { parseHTML } = require("cheerio/lib/static")
// const { Console } = require("console")
// const { parse } = require("path")
const request = require("request")
request("https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/ball-by-ball-commentary", resp)
function resp(err, response, html) {
    if (err) {
        console.log(err)
    } else {
        extracthtml(html)

    }
}
function extracthtml(html) {
     let $= cheerio.load(html).text()
    let contentarr=parsehtml(".match-comment-short-text span").text()
    console.log(contentarr)
    
}