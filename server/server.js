const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const bodyParser = require('body-parser');
const { EEXIST } = require('constants');
const app = express();

//mongo link and connection
const conn = mongoose.createConnection(process.env.DB_URL);

//initializing gfs
let gfs;

//storage engine
const storage = new GridFsStorage({
    url: process.env.DB_URL,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) return reject(err);

                const fileName = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: fileName,
                    bucketName: 'uploads'
                }
                resolve(fileInfo);
            })
        })
    }
});

const upload = multer({ storage });

app.get('/', (req, res) => {
    res.send('HOMEPAGE SOON TO BE DEVELOPED');
});


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
})