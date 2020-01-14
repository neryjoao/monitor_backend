const express = require('express');
const app = express();
const cors = require('cors');
const wss = require('express-ws')(app);

const camera = require('./camera');

const port = 8080;

app.use((req, res, next) => {
    console.info(`Method: ${req.method} url: ${req.originalUrl}`)
});

app.use(cors());
camera.startVideoStream(app);

app.listen(port, () => {
    console.log(`Monitor app listening on port ${port}`)
});