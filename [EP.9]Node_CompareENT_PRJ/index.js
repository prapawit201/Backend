const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const enterprise_route = require('./routes/enterprise')
const sequelize = require('./configs/database')
const PORT  = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.status(200).send("Hello world")
})
app.use(enterprise_route)
// sequelize.sync({
//     force:false,
// }).then(()=>{
    app.listen(POR,()=>{
        console.log("Server start PORT : "+ PORT)
    })
// })