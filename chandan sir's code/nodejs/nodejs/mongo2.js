var mongodbclient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

mongodbclient.connect(url,function(err,db){

if(err) throw err;

var dbo=db.db("vcet");

var myobj={name:"chandan",address:"ratnagiri"};

dbo.collection("inft").findOne({},function(err,res){
if(err) throw err;
console.log(res);
db.close();
});

})