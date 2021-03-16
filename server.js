const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')

app.get('/', (req, res) => {
  res.send("Welcome to mock-app built in MERN stack")
})

//Connect to mongoDB
connectDB()


app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))