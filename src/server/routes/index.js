const express = require('express');
const router = express.Router();

/*
router.get('/', (req, res) => {
    res.render('index');
});*/

async function bestData(url) {
    var Crawler = require("crawler");
    var c = new Crawler({
        maxConnections : 10,
        // This will be called for each crawled page
        callback : function (error, res, done) {
            if(error){
                console.log(error);
            }else{
                var $ = res.$;
                // $ is Cheerio by default
                //a lean implementation of core jQuery designed specifically for the server
                console.log($("title").text());
                news = $(".basic").children('li');
                /*
                for(var i=0; i<5; i++){
                    newsList[i] = $(`[id=book_title_${i}]`).text();
                }
                console.log(newsList);*/
            }
            done();
        }
    });
    // Queue just one URL, with default callback
    c.queue(url);
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(news);
        }, 3000)
    );
}

// 메인 베스트셀러
router.get('/', async (req, res)=>{
    let asd = await bestData('https://book.naver.com/bestsell/bestseller_list.naver?cp=yes24')
    // Queue just one URL, with default callback
    res.render('index', {
        title: 'Homepage', 
        asd: asd
    });
});

module.exports = router;