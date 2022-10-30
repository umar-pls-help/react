const fs = require('firebase-admin');

const serviceAccount = require('./google-services.json');

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

