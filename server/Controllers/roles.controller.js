const db = require("../models");
const roles = db.role;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Roll
    const role = {
        id:req.body.name,
      name: req.body.name

    };
    // Save Tutorial in the database
    roles.create(role)
      .then(data => {
        res.send(data);
      })
      
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
exports.findAll = (req, res) => {
    roles.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
};