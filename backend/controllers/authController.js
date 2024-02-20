import { errorHandler } from "../utils/errors.js";
import User from "./../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(404, "All fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json({ message: "Sign up successful" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  if ((!username || !password)) {
    next(errorHandler(500, "Enter Username/Password or Email/Password"));
  }
  console.log(req.body);
  try {
    const validUser = await User.findOne({ username });
    console.log();
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Wrong Password"));
    }
    const { password: pass, ...userData } = validUser._doc;
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(userData);
  } catch (error) {
    next(error);
  }
};
