const raspividStream = require('raspivid-stream');

exports.startVideoStream = app => {

    app.ws('/camera', (ws, req) => {
        console.log('client connected...');
        console.log(`Request: ${req}`);

        const options = {
            //TODO check what we get in the req
        };

        const videoStream = raspividStream();

        videoStream.on('data', data => {
            ws.send(data, { binary: true }, error => {
                if (error) {
                    console.log(error);
                }
            })
        });

        ws.on('close', () => {
            console.log('Client disconnected');
            videoStream.removeAllListeners('data');
        })
    });
};