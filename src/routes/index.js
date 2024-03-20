const express = require('express')
const router = express.Router();
const userController = require('../controller/user');

router.get('/user', (req, res, next)=>{
    console.log('Test user');
    res.send('get users');
});

router.post('/signup', async (req, res, next)=>{
    try{
        console.log('Test Signup', req.body);
        const result = await userController.createUser(req.body);
        res.status(result.status).send(result);
    } catch(e){
        console.error("Error in signup user",e);
        throw e;
    }
});

router.post('/login', async (req, res, next)=>{
    try{
        console.log('Test Login');
        const result = await userController.findUser(req.body);
        res.status(result.status).send(result);
    } catch(e){
        console.error("Error in login user",e);
        throw e;
    }
});


router.post('/udpate/:userId', async (req, res, next)=>{
    try{
        console.log('Test update user');
        const result = await userController.updateUser(userId, req.body);
        res.status(result.status).send(result);
    } catch(e){
        console.error("Error in update user",e);
        throw e;
    }
});

module.exports = router;