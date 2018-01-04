var express = require("express")

var app = express()

var exp = new RegExp(" \([^)]+\)")

app.get("/", function(request, response){
  var ip = request.headers["x-forwarded-for"].split(",")[0]
  var lang = request.headers["accept-language"].split(",")[0]
  var ware = exp.exec(request.headers['user-agent'])[0].substring(2)
  response.send("Your ip address is " + ip + ".\n Your language is " + lang + ".\n Your software is " + ware + ".\n")
})



app.listen(process.env.PORT)