const express = require('express');
const app = express();

const queryString = require('query-string');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if(!name){
        name = "person";
    }

    if(!age){
        age = 0;
    }

    res.render(`result: ${name} : Your age is ${age}`);
});

app.listen(3000, () => {
    console.log("Server Running");
}
);
