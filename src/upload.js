var express = require('express')
var router = express.Router()

router.post('/', (req, res) => {
    console.log(req.files)
    res.status(200).send({response: 'all good here'});
})

module.exports = router;