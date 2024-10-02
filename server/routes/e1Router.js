const version = require("express").Router();
const layout = require("../views/encriptadorView")

version.use(layout)

module.exports = version