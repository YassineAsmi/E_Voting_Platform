module.exports = app => {
    var cors = require('cors')
    const poll = require("../controllers/poll.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    var corsOptions = {
      origin: '*',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }


    router.post("/",cors(corsOptions), poll.create);
    router.get("/",cors(corsOptions), poll.findAllPoll);
    app.use('/api/poll', router);
  };