import jwt from "jsonwebtoken";

export const sendCookie = (res, user, message, statuscode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(statuscode)
    .cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message,
    });
};
