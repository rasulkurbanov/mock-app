const mongoose = require('mongoose')
const config = require('config')
const dbConfig = config.get('dbConfig')


const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log(`Successfully connected to mongoDB`)
  }
  catch(err) {
    console.log(err)
  }
}


module.exports = connectDB