const mongoose = require('mongoose');
const app = require('./app');

const{PORT = 3000} = process.env;

const DB_HOST = "mongodb+srv://Vitalii:Mango970512prettyboy@cluster0.dueofuh.mongodb.net/db_users_events?retryWrites=true&w=majority"

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

  // доробляти