const { User } = require("../models");

//create user
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({ firstName, lastName, email, password });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
};

//get user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};

//update user
//update user
exports.updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.update({ firstName, lastName, email, password }, {
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};


//delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};
