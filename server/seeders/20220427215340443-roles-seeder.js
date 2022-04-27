'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
                {
                        id: "1",
                        name: "user",
                        description: "",
                        createdAt: "2022-04-16 17:06:10",
                        updatedAt: "2022-04-16 17:06:10",
                },
                {
                        id: "2",
                        name: "moderator",
                        description: "",
                        createdAt: "2022-04-16 17:06:10",
                        updatedAt: "2022-04-16 17:06:10",
                },
                {
                        id: "3",
                        name: "admin",
                        description: "",
                        createdAt: "2022-04-16 17:06:10",
                        updatedAt: "2022-04-16 17:06:10",
                },
                {
                        id: "4",
                        name: "Gamers",
                        description: "Gamers Passioned About Ideas in Electronic Sports",
                        createdAt: "2022-04-27 20:50:33",
                        updatedAt: "2022-04-27 20:50:33",
                },
                {
                        id: "5",
                        name: "Politics",
                        description: "Love to know About Rou opinions and Democracy",
                        createdAt: "2022-04-27 21:38:03",
                        updatedAt: "2022-04-27 21:38:03",
                },
                {
                        id: "6",
                        name: "Football Lovers",
                        description: "Give us your Opnion About Football Players and Teams",
                        createdAt: "2022-04-27 21:42:30",
                        updatedAt: "2022-04-27 21:42:30",
                },
            ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};