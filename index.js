const ex = require("express")
const express = ex()
const axios = require("axios")


express.listen(3000,()=> {

})
express.get("/weather",(req,res)=> {
    console.log(req.query)
axios.get(`http://api.weatherapi.com/v1/current.json?key=f8d50de779e042408bb81324250602&q=${req.query.loc}&aqi=yes`).then((wea)=> {
    if (wea.status = 200) {
        res.status(200)
        res.send({
            "location" : wea.data.location.name,
            "temp": wea.data.current.temp_c,
            "condition": wea.data.current.condition.text
        })
    }
    else {
        res.status(404)
        res.send({})
    }
}).catch((e)=> {
    console.log("error")
    res.status(500)
    res.set({})
})
})

