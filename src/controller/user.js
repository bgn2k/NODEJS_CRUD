const User = require("../models/user");

async function getAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.json(allUsers);
}
async function insertIntoUser(req, res) {
  const body = req.body;
  const user = {
    firstName: body.firstName,
    lastName: body.lastName,
    gender: body.gender,
    email: body.email,
    designation: body.designation,
    experience: body.experience,
  };
  const result = await User.create(user);
  return res
    .status(201)
    .json({ message: `User successfully added with ID : ${result.id}` });
}
async function getUserById(req, res) {
  const userId = req.params.id;
  const userObj = await User.findById(userId);
  return res.json(userObj);
}
async function updateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body);
  return res.status(201).json({
    message: `Successfully updated user with id : ${req.params.id}`,
  });
}
async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message: `Successfully deleted user with id : ${req.params.id}`,
  });
}
module.exports = {
  getAllUsers,
  insertIntoUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
