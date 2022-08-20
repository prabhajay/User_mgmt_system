const express=require('express');
const route=express.Router()
const services=require('../services/render');
const controller=require('../controller/index')

route.get('/',services.homeRoutes)

route.get('/add_user',services.add_user)

route.get('/update_user',services.update_user)

route.post('/api/createuser',controller.create);
route.get('/api/getuser',controller.find);
route.get('/api/getusers',controller.find);
route.patch('/api/updateuser/:id',controller.update);
route.delete('/api/deleteuser:/id',controller.delete);



module.exports=route