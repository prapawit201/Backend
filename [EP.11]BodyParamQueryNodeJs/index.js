const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get("/", (req, res) => {
  return res.status(200).send("Hello world");
});

app.get("/test",(req,res)=>{
    // console.log(req.body.test)
    // console.log(JSON.stringify(req.body.test))
    // console.log(JSON.parse(JSON.stringify(req.body.test)))
    // console.log(req.params)
   return res.status(200).send(req.query)
})
app.listen(PORT, () => {
  console.log("Start server port : " + PORT);
});
