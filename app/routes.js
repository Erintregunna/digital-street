const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/start_page', function(req, res){
    req.session.destroy()
    res.render('start_page.html')
})

router.get('/solicitor_name', function(req, res){
    return res.render('solicitor_name.html', {'redirect_url': '/solicitor_name'})
})

router.post('/solicitor_name', function(req, res){
    res.redirect('/solicitor_email')
})

router.get('/solicitor_email', function(req, res){
    res.render('solicitor_email.html', {'redirect_url': '/solicitor_email'})
})

router.post('/solicitor_email', function(req, res){
    res.redirect('/reference_number')
})

router.get('/reference_number', function(req, res){
      return res.render('reference_number.html', {'redirect_url': '/reference_number','e': false})
})

router.post('/reference_number', function(req, res){
    if (req.body['case_number'] =='' ){
        return res.render('reference_number.html', {'redirect_url': '/reference_number','e': true})
    }
    res.redirect('/check_your_answers')
})

router.get('/check_your_answers', function(req, res){
    res.render('check_your_answers.html')
})

router.post('/check_your_answers', function(req, res){
    res.redirect('/invited_solicitor')
})

router.get('/invited_solicitor', function(req, res){
    req.session.destroy()
    res.render('invited_solicitor.html')
})

router.get('/check_name', function (req,res){
    return res.render('solicitor_name.html', {'redirect_url': '/check_name'})
})

router.post('/check_name', function(req, res){
    res.render('check_your_answers.html')
})

router.get('/check_email', function (req,res){
    return res.render('solicitor_email.html', {'redirect_url': '/check_email'})
})

router.post('/check_email', function(req, res){
    res.render('check_your_answers.html')
})

router.get('/check_number', function (req,res){
    return res.render('reference_number.html', {'redirect_url': '/check_number'})
})

router.post('/check_number', function(req, res){
    res.render('check_your_answers.html')
})
module.exports = router
