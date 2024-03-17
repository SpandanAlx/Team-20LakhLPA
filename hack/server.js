const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

let deviceStates = {
    fan: false,
    lights: false,
    led: false,
    ac: false
};
app.post('/toggle/:deviceType', (req, res) => {
    const { deviceType } = req.params;
    deviceStates[deviceType] = !deviceStates[deviceType];
    res.json({ success: true, message: `Toggled ${deviceType} state` });
});
app.get('/devices', (req, res) => {
    res.json(deviceStates);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
