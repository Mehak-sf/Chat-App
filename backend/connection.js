const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", false);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.hcovoqd.mongodb.net/?retryWrites=true&w=majority`, (err)=> {
  if (err) console.log(err)
  else console.log('connected to mongodb')
});
