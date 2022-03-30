const cheerio = require("cheerio")
const request = require("request");
request("https://www.espncricinfo.com/series/icc-women-s-world-cup-2021-22-1219028/new-zealand-women-vs-england-women-19th-match-1243926/full-scorecard", resp)
function resp(err, response, html) {
    if (err) {
        // console.log(err)
    } else {
        extracthtml(html)

    }
}
function extracthtml(html) {
    let parsehtml =cheerio.load(html)
   let teamArr = parsehtml("squad-player-content").text()
    console.log(teamArr)
} 