import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errors.js";
import User from "../models/userModel.js";

export const test = (req, res) => {
  res.json({ message: "Hi, API is working" });
};

export const updateUser = async (req, res, next) => {
  // req.user => comes from cookie and actual send by client is in queryParams
  // check if both are same
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to Update this user"));
  }
  //check pw
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(403, "Length of Password must be atleast 6"));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  if (!req.body.username.length) {
    return next(errorHandler(403, "Username cannot be empty"));
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(errorHandler(403, "Length of Username must be 7-20"));
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(403, "Username cannot have spaces"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(403, "Username can contain only letters and numbers")
      );
    }

    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updateUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }
};
