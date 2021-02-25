const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users')
const app = express();
let indexRouter = require('./routes/index');
//mongo link and connection
const uri = "mongodb+srv://new-user:frEEcMm0my2OgN4R@backendfileuploader.e42wg.mongodb.net/BackendFileUploader?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongodb')
});
//const conn = mongoose.createConnection(process.env.DB_URL);

//initializing gfs
// let gfs;
// conn.once("open", () => {
//     gfs = new mongoose.mongo.GridFSBucket(conn.db, {
//         bucketName: "uploads"
//     });
// });

//storage engine
// const storage = new GridFsStorage({
//     url: process.env.DB_URL,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) return reject(err);

//                 const fileName = buf.toString('hex') + path.extname(file.originalname);
//                 const fileInfo = {
//                     filename: fileName,
//                     bucketName: 'uploads'
//                 }
//                 resolve(fileInfo);
//             })
//         })
//     }
// });

// const upload = multer({ storage });

// app.get('/', indexRouter);
// app.post('/upload', upload.single('file'), indexRouter);
// app.get('/files/:filename', indexRouter);
// app.post('/files/del/:id', indexRouter); //delete chunks from the db

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})