const { Router } = require("express");
require("dotenv").config();


const { createUser, getUserByMail, putUser } = require("../controllers/userControllers.js");


const users = Router();

//Valida que el usuario exista, o que la sesion no haya terminado

// users.get("/", getAllUsers);
 users.post("/mail", getUserByMail);
// users.put("/changeRole", changeRole);


//users.delete("/delete", deleteUser);

users.put("/update", putUser);
users.post("/create", createUser);

module.exports = users;
