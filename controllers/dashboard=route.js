const router = require('express').Router();
const sequelize= require('../config/connection');
const {Post, User, Comment}= require('../models');

router.get('/', (req, res) => {
   // SELECT *FROM id,title,content,created from user_id
    Post.findAll({
      where: {
        user_id:req.session.user_id
      },
      attributes:[
        'id',
        'title',
        'content',
        'created_at'
      ],
      include: [
        {
          model:Comment,
          attributes:['id', 'comment_text','post_id', 'user_id', 'created_id'],
          include:{
            model:User,
            attributes:['username']
          }
        },
        {
          model:User,
          attributes:['username']
        }
      ]
    }).then(dbPostData=>{
      const posts= dbPostData.map(post=> post.get({plain:true}));
      res.render('dashboard',{posts,loggedIn:true});
    }).catch(error=>{
      console.log(error);
      res.status(500).json(err);
    })
  });
module.exports=router;