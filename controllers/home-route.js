const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      vote_count: 10,
      comments: [{}, {}],
      user: {
        username: 'test_user'
      }
    });
  });
  
  router.get('/signup',(req,res)=>{
   res.render('signup');
  });
  router.get('/signin',(req,res)=>{
    res.render('signin');
   });
router.post('/signup',(req,res)=>{
     
});

router.get('/homepage',(req,res)=>{
    res.render('homepage');
   });

module.exports=router;