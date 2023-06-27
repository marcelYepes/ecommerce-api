const {
  getAll,
  create,
  remove,
  update,
} = require("../controllers/controllerFile")
const express = require("express")

const routerName = express.Router()

routerName.route("/").get(getAll).post(create)

routerName
  .route("/:id")

  .delete(remove)
  .put(update)

module.exports = routerName
