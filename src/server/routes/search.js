const express = require('express');
const router = express.Router();
const client_id = "2QLxRE_5otWbnN0t1TVA";
const client_sec = "dnp2wPibWQ";


async function dataRecieve(api){
    var request = require('request');
    const options = {
        url: api,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_sec}
    }
    return new Promise((resolve, reject) =>{
        request.get(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let obj = JSON.parse(body).items;
                resolve(obj);
            } else {
                res.status(response.statusCode).end();
                console.log('error = ' + response.statusCode);
            }
        });
    })
}

//검색

router.get('/', async (req, res) => {
    var api_url = 'https://openapi.naver.com/v1/search/book.json?query=' + encodeURI(req.query.search); // json 결과
    var api_url_date = api_url+'&sort=date';
    var api_url_count = api_url+'&sort=count';
    list = await dataRecieve(api_url);
    list_data = await dataRecieve(api_url_date);
    list_count = await dataRecieve(api_url_count);

    res.render('search', {
        title: 'Homepage', 
        sim: list,
        date: list_data,
        count: list_count
    });
});

module.exports = router;