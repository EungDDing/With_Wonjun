const express = require('express');
const router = express.Router();
const client_id = "2QLxRE_5otWbnN0t1TVA";
const client_sec = "dnp2wPibWQ";



//검색
router.get('/', (req, res) => {

    var api_url = 'https://openapi.naver.com/v1/search/book.json?query=' + encodeURI(req.query.book); // json 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_sec}
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

module.exports = router;