require('dotenv').config()
const express = require('express')
// import expres from "express" 
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('rajdipcom')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login first</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})