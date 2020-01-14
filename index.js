const express = require('express');
const app = express();
const cors = require('cors');
const ws = require('express-ws')(app);

const camera = require('./camera');

const port = 8090;

app.use(cors());

app.use((req, res, next) => {
    console.info(`Method: ${req.method} url: ${req.originalUrl}`)
});

camera.startVideoStream(app);

app.listen(port, () => {
    console.log(`Monitor app listening on port ${port}`)
});