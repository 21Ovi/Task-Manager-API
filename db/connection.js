const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("C O N N E C T E D  T O  D A T A B A S E"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
