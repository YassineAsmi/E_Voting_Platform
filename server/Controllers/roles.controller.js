const db = require("../models");
const roles = db.role;
const users = db.user;
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
      name: req.body.name,
      description:req.body.name

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
exports.joinRolesGroup=(req,res) => {
  console.log(req)
   users.findByPk(req.body.userId)
  .then((user) => {
    if (!user) {
      console.log("users not found!");
      return null;
    }
    return roles.findByPk(req.body.roleId).then((role) => {
      if (!role) {
        console.log("roles not found!");
        return null;
      }
      user.addRoles(role);
      console.log(`>> added roles id=${role.id} to users id=${user.id}`);
      res.send(user);
    });
  })
  .catch((err) => {
    console.log(">> Error while adding roles to users: ", err);
  });
}