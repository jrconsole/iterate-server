require('dotenv/config')
var express = require('express')
var router = express.Router()

import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

aws.config.update({
    secretAccessKey: process.env.S3_ACCESS_SECRET,
    accessKeyId: process.env.S3_ACCESS_KEY,
    region: "us-west-1"
})

const s3 = new aws.S3();

// s3.listBuckets((err, data) => {
//     if (err) {
//         console.log('s3 connection error', err);
//     } else {
//         console.log(data.Buckets)
//     }
// })

const fileFilter = (req, file, cb) => {
    //console.log('filtered files');
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
}

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'iterate-images',
        acl: 'public-read',
        metadata: function (req, file, cb) {
          cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    }),
    fileFilter
  })
const singleUpload = upload.single('image');

router.post('/', singleUpload, (req, res) => {
    try {
        if (req.file.location) {
            res.status(200).send({ imgURL: req.file.location })
        } else {
            res.status(500).send({ response: "failed to update image" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({response: 'could not update img'})
    }
})

module.exports = router;