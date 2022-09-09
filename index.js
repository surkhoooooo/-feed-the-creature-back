require('dotenv').config()
const cors = require('cors')

const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const app = express();

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "image")))


mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



app.use(require('./routes/user.route'))
app.use(require('./routes/functional.route'))


app.listen(process.env.PORT, () => console.log('Server starde... '));