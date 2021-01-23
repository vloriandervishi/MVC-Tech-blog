const router = require('express').Router();
const homeRoute= require('./home-route');
const dashboardRoutes = require('./dashboard=route');

router.use('/dashboard', dashboardRoutes);
router.use('/',homeRoute);

module.exports=router;