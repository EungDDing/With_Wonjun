const express = require('express');
const router = express.Router();
const client_id = "2QLxRE_5otWbnN0t1TVA";
const client_sec = "dnp2wPibWQ";



//검색
router.get('/', (req, res) => {

    var api_url = 'https://openapi.naver.com/v1/search/book.json?query=' + encodeURI(req.query.search); // json 결과
    var request = require('request');
    const options = [
        {
            url: api_url+'&sort=sim',
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_sec}
        },
        {
            url: api_url+'&sort=date',
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_sec}
        },
        {
            url: api_url+'&sort=count',
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_sec}
        }
    ]
    let objList = [];
    for(var i=0; i<3; i++){
        request.get(options[i], function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let obj = JSON.parse(body).items;
                objList.push(obj);
                console.log(objList);
            } else {
                res.status(response.statusCode).end();
                console.log('error = ' + response.statusCode);
            }
        });
    }
    res.end();
});

module.exports = router;