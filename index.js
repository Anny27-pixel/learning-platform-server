const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('courses api is running');
});

app.listen(port, () => {
    console.log('courses running in port', port);
})