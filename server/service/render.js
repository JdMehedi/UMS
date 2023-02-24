const axios = require("axios");
const { response } = require("express");
exports.CreateUserRoutes = (req, res) => {
  res.render("form");
};

exports.UpdateUserRoutes = (req, res) => {
  try {
    axios
      .get(`http://localhost:5003/api/users?id=${req.query.id}`)
      // .get("http://localhost:5003/api/users", { params : { id : req.query.id }})
      .then(function (response) {
        res.render("update_user", { users: response.data.data });
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.HomeRoutes = (req, res) => {
  // Make a get request to api user
  try {
    axios.get("http://localhost:5003/api/users").then(function (response) {
      console.log(response.data.data);
      res.render("index", { users: response.data.data });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.UserProfileRoutes = (req, res) => {
  res.render("profile");
};
