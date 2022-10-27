const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());


const categories = require('./data/categories.json');
const courses = require('./data/categories.json');



app.get('/', (req, res) => {
    res.send('courses api is running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories)
});
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('courses running in port', port);
})