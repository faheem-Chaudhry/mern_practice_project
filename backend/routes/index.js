const exprees = require('express');
const router = exprees.Router();
const authController = require('../controller/authController');
//testing
router.get('/testing', (req, res) => {
    res.json({msg : 'Hello World 123456'})
  })

//user

//login
router.get('/login',authController.login);
//register
router.post('/register',authController.register);
//logout
//refresh

//blog
//crud
//create
//read all blogs
//read blog by id
//update
//delete

//comment
//create comment
//read comment by id

module.exports=router;