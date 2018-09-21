const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/check_your_answers', function(req, res){
    res.render('check_your_answers')
})
