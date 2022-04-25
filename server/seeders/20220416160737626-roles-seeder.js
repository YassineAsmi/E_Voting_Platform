'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
                {
                        id: "1",
                        name: "user",
                        createdAt: "2022-04-16 17:06:10",
                        updatedAt: "2022-04-16 17:06:10",
                },
                {
                        id: "2",
                        name: "moderator",
                        createdAt: "2022-04-16 17:06:10",
                        updatedAt: "2022-04-16 17:06:10",
                },
                {
                        id: "3",
                        name: "admin",
                        createdAt: "2022-04-16 17:06:10",
                        updatedAt: "2022-04-16 17:06:10",
                },
            ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};