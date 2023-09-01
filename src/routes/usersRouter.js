const { Router } = require("express");
require("dotenv").config();


const { createUser, getUserByMail, putUser, getAllUsers, putUserDos, putUserTres } = require("../controllers/userControllers.js");
const {getUsersNameHandler} = require("../handlers/userHandler.js")


const users = Router();

//Valida que el usuario exista, o que la sesion no haya terminado

// users.get("/", getAllUsers);
 users.post("/mail", getUserByMail);
// users.put("/changeRole", changeRole);


//users.delete("/delete", deleteUser);

users.get("/", getAllUsers);
users.put("/update", putUser);
users.put("/updateDos/:id", putUserDos);
users.put("/updateTres/:id", putUserTres);
users.post("/create", createUser);
users.get("/name", getUsersNameHandler);

module.exports = users;
