const express = require('express');
const app = express();
const path = require('path');
const port = 50009;

app.use(express.static(path.join(__dirname, 'routes')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "index.html"))
})
app.listen(port, () => {
    console.log(`this website strating port no:${port}`);
})