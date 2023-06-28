const sequelize = require("../utils/connection")
const user = require("./createData/user")

const main = async () => {
  try {
    await sequelize.sync({force: true})
    await user()
    console.log("Me ejecute 😎")
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

main()
