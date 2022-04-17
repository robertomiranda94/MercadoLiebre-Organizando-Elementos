const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));

//CREAR LAS RUTAS
app.get("/", (req, res) =>res.sendFile(path.join(__dirname, "./views", "home.html")));
app.get("/register", (req, res) =>res.sendFile(path.join(__dirname, "./views", "register.html")));
app.get("/login", (req, res) =>res.sendFile(path.join(__dirname, "./views", "login.html")));

//ESCUCHAR EL SERVIDOR
app.listen(port, () => console.log("servidor corriendo en el puerto " + port));
