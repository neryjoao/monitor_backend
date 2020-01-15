const express = require('express');
const app = express();
const enableWs = require('express-ws')(app);
const cors = require('cors');

const camera = require('./camera');

const port = process.env.PORT || 8080;
app.use(cors());

app.use((req, res, next) => {
    console.info(`Method: ${req.method} url: ${req.originalUrl}`);
    next();
});

app.ws('/echo', (ws, req) => {
    ws.on('message', (msg) => {
        console.log('its working!');
        ws.send(`Im returning you the same: ${msg}`)
    })
});

camera.startVideoStream(app);

app.listen(port, () => console.log(`Listening on port ${port}`));