var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');


var app = express();

app.use(bodyParser.json());

app.get('/todos/:id',(req,res) => {
    var id= req.params.id;
    if(!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Todo.findById(id).then((doc)=>{
        if(!doc){
            res.status(404).send();
        }
        res.send(doc);
    },(e)=>{
        res.status(400).send();
    });
})

app.listen(3000,()=> {
    console.log('Listening on port 3000');
});