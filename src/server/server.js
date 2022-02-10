const express = require('express');


const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');


const app = express();


app.set('view engine', 'pug');
app.set('views', __dirname+'../../public/views');

app.use(express.json());

app.use('/', indexRouter);
app.use('/search', searchRouter);



app.listen(8000, () => {
    console.log('8000번 포트에서 서버 실행');
});