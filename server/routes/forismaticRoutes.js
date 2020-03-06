const axios = require('axios')

const router = require('express').Router()

router.get('/quote', function(req, res){
    axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&key=1')
    .then((response)=> {
        console.log(response.data)
        res.status(200).json(response.data)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router