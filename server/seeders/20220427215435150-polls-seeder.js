'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Polls', [
                {
                        id: "1",
                        question: "Who is the best football player 2022 ?",
                        sug1: "Lionel Messi",
                        sug2: "Kylian Mbappe",
                        sug3: "Neymar",
                        sug4: "Cristiano Ronaldo",
                        sug5: "",
                        sug6: "",
                        createdAt: "2022-04-27 21:27:18",
                        updatedAt: "2022-04-27 21:27:18",
                },
                {
                        id: "2",
                        question: "Who is the best League Of Legends Player ?",
                        sug1: "Uzi ",
                        sug2: "Clearlove ",
                        sug3: "Faker",
                        sug4: "Rekkles",
                        sug5: "",
                        sug6: "",
                        createdAt: "2022-04-27 21:30:31",
                        updatedAt: "2022-04-27 21:30:31",
                },
                {
                        id: "3",
                        question: "Who is the best Tunisian President ?",
                        sug1: "Kais Saied",
                        sug2: "Moncef Marzouki",
                        sug3: "Hbib Bourguiba",
                        sug4: "Zine El Abidine Ben Ali",
                        sug5: "",
                        sug6: "",
                        createdAt: "2022-04-27 21:35:14",
                        updatedAt: "2022-04-27 21:35:14",
                },
            ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Polls', null, {});
  }
};