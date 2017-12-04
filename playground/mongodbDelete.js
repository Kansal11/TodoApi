const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect to server');
    }
    console.log('connected successfully ');

    // db.collection('Todos').deleteMany({completed:true}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').deleteOne({name:'Be active'}).then((result)=> {
        console.log(result);
    });

    db.close();
});