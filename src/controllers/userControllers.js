require("dotenv").config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  //TOKEN_AUTH0,
  //GET_USER_AUTH0,
  //POST_USER_AUTH0,
} = process.env;
const axios = require("axios");
const { User } = require("../db.js");
const { Op } = require("sequelize");

// Lo que hace esta ruta es:
// 1. Valida que estén todos los datos required del modelo en el body de la request.
// 2. Extrae el mail de auth0 de la request del usuario.
// 3. Busca en la base de datos a un usuario con el mail del punto 2. Si existe el usuario, responde con error.
// 4. Hace un create user en la db, le pasa valores que vienen en la request incluyendo el id de auth0. Responde exitosamente.
const createUser = async (req, res, next) => {
  console.log(
    "///////////////////////////////Create User///////////////////////////"
  );
  // // // 1. // // //
  const {
    first_name,
    last_name,
    gender,
    email,
    delivery_address,
    mobile,
    role_id,
    //user_password,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !gender ||
    !email ||
    !delivery_address ||
    first_name === "" ||
    last_name === "" ||
    email === "" ||
    delivery_address === ""
  )
    return res.status(400).send({ message: "fields can not be empty" });

  try {
    // Crear el nuevo usuario
    const userCreated = await User.create({
      first_name,
      last_name,
      gender,
      email,
      delivery_address,
      mobile,
      role_id,
      //user_password,
      auth0_id: "1", //decoded_auth0_user.sub,
    });

    console.log("User creado correctamente:", userCreated);

    res.status(200).json({
      message: "User created",
      userID: userCreated.id,
    });
  } catch (error) {
    console.log(error);
    next(error);
    return res.status(500).json({ message: error });
  }
};

const getUserByMail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(412).json({ message: "email no recibido" });
  }

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(413).json({ message: "usuario no encontrado" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const putUser = async (req, res, next) => {
  const { first_name, last_name, email, mobile, delivery_address } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    console.log(user)
    if (!user) res.status(404).json({ message: "User does not exist" });
    const userModified = await user.update({
      first_name,
      last_name,
      mobile,
      delivery_address,
    });
    if (userModified) res.status(201).json({ message: "User modified" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const putUserDos = async (req, res) => {
  const {id} = req.params;
  try {
    const userDos = await User.findOne({
      where: {
        id: id,
      },
    });
    if(!userDos) res.status(400).json({error: error.message});
    const roll = userDos.role_id === "admin" ? "client" : "admin"
    const modifiedUser = await userDos.update({
      role_id: roll
    });
    if(modifiedUser) res.status(200).json({message: "User rol modified"})

    /* if(!userDos) res.status(400).json({error: error.message});
    const userModifiedDos = await userDos.update({
      role_id :!role_id
    })
    if(userModifiedDos) res.status(200).json({message: "User rol modified"}) */
  } catch (error) {
    throw new Error(error.message)
  };
};

const putUserTres = async (req, res) => {
  const {id} = req.params;
  try {
    const userDos = await User.findOne({
      where: {
        id: id,
      },
    });
    if(!userDos) res.status(400).json({error: error.message});
    const status = userDos.user_status === true ? false : true
    const modifiedUser = await userDos.update({
      user_status: status
    });
    if(modifiedUser) res.status(200).json({message: "User status modified"})
  } catch (error) {
    throw new Error(error.message)
  };
};

const getAllUsers = async (req, res) => {
  try {
    const response = await User.findAll();
  res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const getUsersName = async (name) => {
  try {
    let userName = await User.findAll({
      where: {
        first_name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return userName;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getUserByMail,
  putUser,
  getAllUsers,
  getUsersName,
  putUserDos,
  putUserTres,
};
