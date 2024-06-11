const checkIfEmailIsValid = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email make sure to use a correct email" });
  }
  next();
};
module.exports = { checkIfEmailIsValid };
