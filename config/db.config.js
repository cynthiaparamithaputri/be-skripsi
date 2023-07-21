const mongoose = require('mongoose')

const url = "mongodb+srv://cynthiaparamithaputri:<cynthiaparamithaputri1>@skripsi-cynthia.cba56c0.mongodb.net/"

async function connect() {

      try {
          await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
          })
      } catch (error) {
          console.log(error);
      }
}

const db = connect()

module.exports = db