const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const user = {
    id: req.body.id,
    username: req.body.username,
    email: req.body.email
  };

  jwt.sign({ user }, "secretkey", { expiresIn: "300s" }, (err, token) => {
    console.log(token);
    res.send({
      token
    });
  });
};
