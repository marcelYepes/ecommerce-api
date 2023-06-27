const {DataTypes} = require("sequelize")
const sequelize = require("../utils/connection")

const User = sequelize.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get())
  delete values.password
  return values
}

User.beforeCreate(async User => {
  const hashPassword = await bcrypt.hash(User.password, 10)
  User.password = hashPassword
})

module.exports = User
