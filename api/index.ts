const jsonfile = require("jsonfile")
const express = require('express')
const app = express()
const path = require('path')
const port = 3000


app.get("/", (req, res) => res.send("Data for the eventposter component"));

app.get('/events', (req, res) => {
    const dataPath = path.join(__dirname, 'data/eventData.json');
    res.setHeader('Cache-Control', 'no-store')
    jsonfile.readFile(dataPath, (err, obj) => {
    if (err) console.log('[ERROR]' + err)
        res.end(JSON.stringify(obj))
    })
    
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;