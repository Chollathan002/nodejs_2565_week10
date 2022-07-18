const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
const hostname = "localhost"

//4.Create Route: http://localhost:5000/
app.get('/',(req,res)=>{
    //res.status(200).send("Express")
      res.status(200).json(
          {id: '101',
           user:'Mark',
           level:'admin'
        }
    )
})

app.listen(PORT,()=>{
    console.log(`Server running at http://${hostname}:${PORT}`)
})