const axios = require('axios')

const router = require('express').Router()


router.post('/mymemory', function(req, res){
    let word = req.body.description
    axios({
        method: "get",
        url: `https://api.mymemory.translated.net/get?q=${req.body.description}!&langpair=id|en&de=ignatiusagus150@gmail.com `
    })
    .then((response)=> {
        console.log(response)
        res.status(200).json(response.data)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router