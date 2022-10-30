var admin = require("firebase-admin");

var serviceAccount = require("./test-dad7d-firebase-adminsdk-sz83s-bd946a5f85.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 
const usersDb = db.collection('chandan');

db.collection("chandan").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })});


db.collection("chandan").where("name", "==", "chandan")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });



//console.log(liam);
/*  liam.set({
 first: 'Liam',
 last: 'Ragozzine',
 address: '133 5th St., San Francisco, CA',
 birthday: '05/13/1990',
 age: '30'
});
*/



//console.log(liam);
 