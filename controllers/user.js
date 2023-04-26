import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
 
  res.json({
    success: true,
    users,
  });
};

export const getUserDetails = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({
    success: true,
    user,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("temp", "cookie").json({
    success: true,
    message: "user created succesfully",
  });
};
