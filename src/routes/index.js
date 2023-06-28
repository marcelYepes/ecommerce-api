const express = require("express")
const routerUser = require("./user.route")
const routerCategory = require("./category.route")
const router = express.Router()

// colocar las rutas aquí
router.use("/users", routerUser)
router.use("/category", routerCategory)

module.exports = router
