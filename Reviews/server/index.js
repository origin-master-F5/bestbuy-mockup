const express = require('express');
const app = express();
const router = require('./routes.js')
const port = 3003;
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle cors with proxy
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/reviews', router)

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Listening on port: ${port}`))