const express = require ("express");

const bodyParser = require ("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendfile(__dirname + "/index.html");
});

app.post("/", function(req, res)
{
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = weight/(height*height);
  res.send("Your BMI Is  "  + result);
})




app.listen(4000, function()
{
  console.log("Your port has been startted");

});
