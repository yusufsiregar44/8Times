const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

class UserController {
  static register(req, res) {
    console.log(req);
    bcrypt.hash(req.body.password, 10)
      .then((encryptedPsw) => {
        User.create({
            username: req.body.username,
            password: encryptedPsw,
          })
          .then((response) => {
            res
              .status(200)
              .send(response);
          })
          .catch((err) => {
            res
              .status(400)
              .send(err);
          });
      })
      .catch((err) => {
        res
          .status(500)
          .send(err);
      });
  }

  static login(req, res) {
    User.find({
      username: req.body.username,
    })
    .then((userData) => {
      bcrypt.compare(req.body.password, userData[0].password, function (err, response) {
        console.log(response);
        if (err) {
          res
            .status(500)
            .send(err)
        } else {
          if (response === false) {
            res
              .status(401)
              .send(err)
          } else {
            jwt.sign({
              _id: userData[0]._id,
              username: userData[0].username,
            }, process.env.JWT_SECRET_KEY, function (err, newlyCreatedJwtToken) {
              if (err) {
                res
                  .status(500)
                  .send(err)
              } else {
                console.log(newlyCreatedJwtToken);
                res
                  .status(200)
                  .send(newlyCreatedJwtToken)
              }
            });
          }
        }
      });
    })
    .catch((err) => {
      res
        .status(400)
        .send(err)
    })
  }
}

module.exports = UserController;
