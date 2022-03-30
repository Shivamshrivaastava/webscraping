const cheerio = require("cheerio")
const request = require("request")
request("https://www.espncricinfo.com/series/icc-women-s-world-cup-2021-22-1219028/new-zealand-women-vs-england-women-19th-match-1243926/full-scorecard", resp)
function resp(err, response, html) {
    if (err) {
        console.log(err)
    } else {
        extracthtml(html)
    }
}
function extracthtml(html) {
    let $ = cheerio.load(html)
    let teamArr = $(".match-info-.match-info-MATCH .team")
    // console.log(teamArr)
    let wteam;
    for (let i = 0; i < teamArr.length; i++) {
        let hasClass = $(teamArr[i]).hasClass("team")
        if (hasClass == true) {
            let teamnameElem = $(teamArr[i]).find(".name")
            wteam = teamnameElem.text().trim()
        }
    }
    console.log(wteam)
    let inningArr = $(".card.content-block.match-scorecard-table.collapsible") {
        for (let j = 0; j < inningArr.length; j++) {
        let teamname = $(inningArr[j]).find(".header-title.label").text()
        // console.log(teamname)
        let hwt;
        lethwtname;
        if (wteam == teamName) {
            let tableEle = $(inningArr[j]).find(".table.bowler")
            let allBowlers = $(tableEle).find("tr")
            for (let k = 0; k < allBowlers.length; k++)

        
    }
    }

