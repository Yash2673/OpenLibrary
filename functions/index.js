const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

 exports.helloWorld = functions.https.onRequest((request, response) => {
   response.send("Hello from Firebase!");
 });

 const createNotification = (notification => {
     return admin.firestore().collection('notifications').add(notification).then(doc => console.log('Notification Added',doc));
 })

 exports.requestBook = functions.firestore.document('request/{requestId}').onCreate(doc => {
     const req = doc.data();
     const notification = {
         content : "requested by",
         user : `${req.firstName} ${req.lastName}`,
         book : `${req.book}`,
         author : `${req.author}`,
         time : admin.firestore.FieldValue.serverTimestamp()
     }

     return createNotification(notification);
 })

 exports.createBook = functions.firestore.document('books/{bookId}').onCreate(doc => {
     const book = doc.data();
     const notification = {
         content : "added",
         book : `${book.title}`,
         author : `${book.author}`,
         time : admin.firestore.FieldValue.serverTimestamp()
     }

     return createNotification(notification);
 })

 
