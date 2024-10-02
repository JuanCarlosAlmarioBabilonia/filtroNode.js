const express = require("express");
const cors = require('cors');
const app = express();
const {join} = require("path")
require('dotenv').config();
const encriptador = require("./server/routes/encriptadorRouter")
const d1 = require("./server/routes/d1Router")
const e1 = require("./server/routes/e1Router")


app.use("/css", express.static(join(__dirname, "/src/css")))
app.use("/js", express.static(join(__dirname, "/src/js")))
app.use("/storage", express.static(join(__dirname, "/src/storage")))

console.log(join(__dirname, "/src/css"))

console.log(__dirname)

app.use(express.json());
app.use(cors());

app.use("/", encriptador)
app.use("/encriptar", e1 )
app.use("/desencriptar", d1 )


const port = process.env.EXPRESS_PORT;
const host = process.env.EXPRESS_HOST;

app.listen(port, host, () => {
    console.log(`${process.env.EXPRESS_PROTOCOL}${host}:${port}`);
});







