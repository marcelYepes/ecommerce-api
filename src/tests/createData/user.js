const User = require("../../models/User")

const user = async () => {
  const userCreate = {
    firstName: "Marcel",
    lastName: "Yepes",
    email: "marcelyepesqf@gmail.com",
    password: "marcel1234",
    phone: "3208217926",
  }
  await User.create(userCreate)
}

module.exports = user
