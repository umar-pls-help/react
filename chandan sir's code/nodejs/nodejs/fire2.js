
var admin = require("firebase-admin");

var serviceAccount = require("./test-dad7d-firebase-adminsdk-sz83s-bd946a5f85.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db=admin.firestore();
const userdb =db.collection('chandan');
const record= userdb.doc('vcet1');

const d= db.collection("chandan").where("name","==","chandan")
.get()
.then(function(query){
query.forEach(function(doc)
{console.log(doc.id,":",doc.data())})})
.catch(function(error){
console.log("error");
});





