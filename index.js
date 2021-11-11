const express = require('express')
const app = express()

const userRoute = require('./routes/User')
app.use(userRoute)

app.post('/', userRoute)
//app.post(userRoute, '/user')
app.listen(3000, () => console.log('Serve is run at port', 3000))
