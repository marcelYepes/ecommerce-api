const User = require("../../models/User")

const user = async () => {
  const userCreate = {
    firstName: "Silvia",
    lastName: "Sanchez",
    email: "silviasan@gmail.com",
    password: "silvial1234",
    phone: "3208217926",
  }
  await User.create(userCreate)
}

module.exports = user
