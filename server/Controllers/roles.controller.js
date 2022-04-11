const db = require("../models");
const roles = db.role;
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