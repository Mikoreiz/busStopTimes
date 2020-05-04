const express = require("express")
const bodyParser = require("body-parser")
const adaptReq = require("./helpers/adaptReq")
const handler = require("./route/index")
const db = require("./db")

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  
app.use(bodyParser.json())

app.get("/departureTimes/", routeController)

function routeController(req, res) {
    const httpRequest = adaptReq(req)
    db.makeQuery(handler(httpRequest), function(err, results, fields) {
        if (!err) {
            res.json({data: results})
        } else {
            console.log(err)
        }
    })
}

app.listen(3001, () => console.log("Listening on port 3001"))