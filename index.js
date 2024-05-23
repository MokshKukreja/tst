const express = require('express')
const app = express()
const port = 8000
// const mongoose = require("mongoose")
// const transactionRouter = require('./routes/transactionRoutes')
// const userRouter = require('./routes/userRoutes')


app.use(express.json())


// app.use(cors())



// app.use("/transactions",transactionRouter)
// app.use("/users",userRouter)

// mongoose.connect("mongodb+srv://mokshkukreja999:moksh90@cluster0.frzozja.mongodb.net/expense?retryWrites=true&w=majority&appName=Cluster0", () => {
//     console.log("Connected successfully");
// })
// mongoose.set('strictQuery', true);



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(8000, () => {
    console.log(`Example app listening on port ${port}`)
})