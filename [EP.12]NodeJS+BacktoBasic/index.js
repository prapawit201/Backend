const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/' , (req, res) => {
      res.status(200).send({
            message : "Hello world!"
      })
})
app.listen(PORT, () => {
  console.log(`Server start port : ${PORT}`)
});
