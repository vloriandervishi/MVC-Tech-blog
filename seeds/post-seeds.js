const { Post } = require('../models');

const postData = [
  {
    title: 'ORM Mapping',
    content: 'I have really loved learning about ORM.',
    user_id: 1
    
  }
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;