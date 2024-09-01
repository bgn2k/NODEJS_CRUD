const express = require("express");
const {
  getAllUsers,
  insertIntoUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controller/user");
const userRoute = express.Router();

//App routes for common api paths
userRoute
  .route('/:id')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

//router for /
userRoute.route('/').get(getAllUsers).post(insertIntoUser);

module.exports = userRoute
