module.exports = app => {
    const roles = require("../controllers/roles.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.get("/", roles.findAll);
    router.post("/", roles.create);
    app.use('/api/role', router);
}