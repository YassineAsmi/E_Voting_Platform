'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
                {
                        id: "1",
                        username: "Khemais",
                        email: "iyazasmi@gmail.com",
                        password: "$2a$08$vpb89NZDeYrawi80xYzLEOvxZVYoDfT2eZm6DBjFfxsN7/ZuDHUn2",
                        createdAt: "2022-04-27 21:56:37",
                        updatedAt: "2022-04-27 21:56:37",
                },
                {
                        id: "2",
                        username: "Yassine",
                        email: "yassine.asmi@gmail.com",
                        password: "$2a$08$QFI5ku0pcuAdCSuxl1gbz.YVubrnAczP3gX7cB3e67jx1PItd9lh.",
                        createdAt: "2022-04-27 21:57:07",
                        updatedAt: "2022-04-27 21:57:07",
                },
                {
                        id: "3",
                        username: "azer",
                        email: "yassine.asmi@itbs.tn",
                        password: "$2a$08$/LdDIIUTlACLUIHgHy3m3.EpOy1Bdl9AOwTDWNntZ3EvQg23THMA6",
                        createdAt: "2022-04-27 21:57:34",
                        updatedAt: "2022-04-27 21:57:34",
                },
            ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};