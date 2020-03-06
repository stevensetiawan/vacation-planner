const axios = require('axios')

const router = require('express').Router()

router.get('/mymemory', function(req, res){
    let word = req.body.description
    axios({
        method: "get",
        url: `https://api.mymemory.translated.net/get?q=${word}!&langpair=id|en`
    })
    .then((response)=> {
        res.status(200).json(response.data)
    })
})

module.exports = router