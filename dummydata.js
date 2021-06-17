if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const AllCustomer = require("./models/allCustomer");

dbUrl = process.env.DB_URL;

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
    currentBalance: 90000,
  },
  {
    name: "Trgarian",
    email: "tigarian@gmail.com",
    accountNumber: 12346252721,
    currentBalance: 880000,
  },
  {
    name: "Curly",
    email: "curly@gmail.com",
    accountNumber: 20346278721,
    currentBalance: 50000,
  },
  {
    name: "Sonrli",
    email: "sonrli@gmail.com",
    accountNumber: 12776278721,
    currentBalance: 64000,
  },
  {
    name: "Merry",
    email: "merry@gmail.com",
    accountNumber: 12346279021,
    currentBalance: 74000,
  },
  {
    name: "Dau",
    email: "dau@gmail.com",
    accountNumber: 12346008721,
    currentBalance: 34000,
  },
  {
    name: "Soni",
    email: "soni@gmail.com",
    accountNumber: 45134627872,
    currentBalance: 49000,
  },
  {
    name: "Mohan",
    email: "mohan@gmail.com",
    accountNumber: 12382478721,
    currentBalance: 57000,
  },
  {
    name: "Savi",
    email: "savi@gmail.com",
    accountNumber: 30346278721,
    currentBalance: 79000,
  },
];

AllCustomer.insertMany(customers)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
