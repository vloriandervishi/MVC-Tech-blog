const router = require('express').Router();
const homeRoute= require('./home-route');
const dashboardRoutes = require('./dashboard-route');

router.use('/dashboard', dashboardRoutes);
router.use('/',homeRoute);
router.use('/api', apiRoutes);

module.exports=router;