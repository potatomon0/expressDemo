const express = require("express")
const app = express()

app.set("view engine","jsx")
app.engine("jsx",require("express-react-views").createEngine())

const groceries = ['eggs','noodles','veggies','ice-cream','sauce','rice','drinks','fish','beef','wings'];

app.get('/',(req,res)=>{
    res.send("<h1>Here</h1>")
})
app.get('/home',(req,res)=>{
    res.render("Home")
})
// app.get('/:groceriesIndex',(req,res)=>{
//     res.send(groceries[req.params.groceriesIndex])
// })
app.get('/:groceriesIndex',(req,res)=>{
    if(groceries[req.params.groceriesIndex]){
        res.send(groceries[req.params.groceriesIndex])
    }else{
        res.send(`cannot find: ${req.params.groceriesIndex}`)
    }
})
let port = 3000
app.listen(port,(req,res)=>{
    console.log(`Server is now listening ton Port ${port}`)
})