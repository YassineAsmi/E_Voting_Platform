module.exports = app => {
    const poll = require("../controllers/poll.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", poll.create);
    router.get("/", poll.findAll);
    app.use('/api/poll', router);
  };