const axios = require('axios');

const express = require('express')
const app = express()
const port = 3000

app.get('/weather', function(req, res){
    axios({
        "method": "GET",
        "url":"http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=d2606a9ee3680c51b60d1b000b2647f4",
            })
                .then((response)=>{
                  res.send(response.data)
                })
    })

app.get('/')


app.listen(port, ()=>console.log(`listening on port ${port}`))