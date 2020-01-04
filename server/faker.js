// We will use this to create fake contributers data
const faker = require('faker');
const { User } = require('./database/schemas');


const createFakeUsers = function(numUsers) {
  for (let i = 0; i < numUsers; i++) {
    const userName = faker.internet.userName();
    const newUser = new User({

      username: userName,
      username_case: userName.toLowerCase(),
      fistname: faker.name.firstName(),
      password: faker.internet.password(),
      lastname: faker.name.lastName(),
      profile_pic: faker.image.people(),
      bio: faker.lorem.paragraph(),

    });


    newUser.hashPassword().then(() => {
      newUser.save((err, savedUser) => {
        if (err || !savedUser) {
          console.log(err);
          console.log('user creation failed');
        } else {
          console.log('User successfully created');
        }
      });
    });

  }
};

module.exports = { createFakeUsers };
