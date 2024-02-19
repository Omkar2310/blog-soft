import { errorHandler } from "../utils/errors.js";
import User from "./../models/userModel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  if (
    !userName ||
    !email ||
    !password ||
    userName === "" ||
    email === "" ||
    password === ""
  ) {
    console.log("HIIIIIIIIIIIIIII ");
    return next(errorHandler(404, "All fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json({ message: "Sign up successful" });
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: error.message });
    next(error);
  }
};
