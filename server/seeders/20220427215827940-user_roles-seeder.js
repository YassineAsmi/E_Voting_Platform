'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User_roles', [
                {
                        createdAt: "2022-04-27 21:56:37",
                        updatedAt: "2022-04-27 21:56:37",
                        roleId: "1",
                        userId: "1",
                },
                {
                        createdAt: "2022-04-27 21:57:07",
                        updatedAt: "2022-04-27 21:57:07",
                        roleId: "1",
                        userId: "2",
                },
                {
                        createdAt: "2022-04-27 21:57:34",
                        updatedAt: "2022-04-27 21:57:34",
                        roleId: "1",
                        userId: "3",
                },
            ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User_roles', null, {});
  }
};