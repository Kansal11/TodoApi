const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect to server');
    }
    console.log('connected successfully ', db);

    db.collection('Users').insertOne({
        name:'Sumit',
        age:25,
        location:'Hyderabad'
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert');
        }
        console.log("Inserted Successfully");
        console.log(JSON.stringify(result.ops,undefined,2));
    })

    db.close();
});