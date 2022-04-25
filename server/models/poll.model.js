module.exports = (sequelize, Sequelize) => {
    const Evoting = sequelize.define("poll", {
      question: {
        type: Sequelize.STRING
      },
      sug1: {
        type: Sequelize.STRING
      },
      sug2: {
        type: Sequelize.STRING
      },
      sug3: {
        type: Sequelize.STRING
      },
      sug4: {
        type: Sequelize.STRING
      },
      sug5: {
        type: Sequelize.STRING
      },
      sug6: {
        type: Sequelize.STRING
      },
    });
    return Evoting;
  };