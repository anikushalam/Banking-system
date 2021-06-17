if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const AllCustomer = require("./models/allCustomer");

dbUrl = process.env.DB_URL || "mongodb://localhost:27017/allCustomer";

mongoose
  .connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("We are connected database.... by local Machine");
  })
  .catch((err) => {
    console.log("OH NO ERROR..........");
    console.log(err);
  });

const customers = [
  {
    name: "Ravi",
    email: "ravi@gmail.com",
    accountNumber: 12346278721,
    currentBalance: 100000,
  },
  {
    name: "Guha",
    email: "guha@gmail.com",
    accountNumber: 12346278723,
    currentBalance: 100000,
  },
  {
    name: "Trgarian",
    email: "tigarian@gmail.com",
    accountNumber: 12346252721,
    currentBalance: 100000,
  },
  {
    name: "Curly",
    email: "curly@gmail.com",
    accountNumber: 20346278721,
    currentBalance: 100000,
  },
  {
    name: "Sonrli",
    email: "sonrli@gmail.com",
    accountNumber: 12776278721,
    currentBalance: 100000,
  },
  {
    name: "Merry",
    email: "merry@gmail.com",
    accountNumber: 12346279021,
    currentBalance: 100000,
  },
  {
    name: "Dau",
    email: "dau@gmail.com",
    accountNumber: 12346008721,
    currentBalance: 100000,
  },
  {
    name: "Soni",
    email: "soni@gmail.com",
    accountNumber: 45134627872,
    currentBalance: 100000,
  },
  {
    name: "Mohan",
    email: "mohan@gmail.com",
    accountNumber: 12382478721,
    currentBalance: 100000,
  },
  {
    name: "Savi",
    email: "savi@gmail.com",
    accountNumber: 30346278721,
    currentBalance: 100000,
  },
];

AllCustomer.insertMany(customers)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
