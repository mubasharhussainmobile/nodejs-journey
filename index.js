const express = require('express');
const pool = require('./src/config/db')
const app = express();

app.use(express.json());


// routes
const helloRoute = require('./src/routes/hello.route')
app.use('/hello',helloRoute)

const timeRoute = require('./src/routes/time.route')
app.use('/time',timeRoute)

const echoRoute = require('./src/routes/echo.route')
app.use('/echo',echoRoute)

const userRoute = require('./src/routes/user.route')
app.use('/users',userRoute)


app.listen(3000,() => {
    console.log('Server is running on port 3000');
})