const { Router } = require("express");
const { User } = require('../models/user');

const router = Router();

router.get('/signin',(req,res) => {
    res.render('signin');
});

router.get('/signup',(req,res) => {
    res.render('signup');
});

router.post('/signup',async (req,res) => {
    const { fullName, email ,password } = req.body;

    await User.create({
        fullName,
        email,
        password
    });

    res.redirect('/');
});

router.post('/signin',async (req,res) => {
    try {
        const { email , password } = req.body;
        const token = await User.matchPasswordAndGenerateToken(email,password);  // Add await
        
        return res.cookie('token',token).redirect('/');  // Add return
    } catch(err) {
        // console.log(err.message);
        return res.redirect('/user/signin');
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token').redirect('/');
});



module.exports = {
    router,
}