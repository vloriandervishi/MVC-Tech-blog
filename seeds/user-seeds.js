const { User } = require('../models');

const userData = [
  {
    username: 'vddd',
    password: 'test'
    
  }
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;