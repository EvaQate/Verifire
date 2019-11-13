const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

const userController = {}


userController.getAllUsers=(req,res,next) => {
    User.find({},(err,users) => {
        if(err) return next('Error in userController.getAllUsers' +JSON.stringify(err))
        res.locals.users=users
        return next()
    });
};




// @param req -http Request
// @param res -http Server Response
userController.createUser = (req,res,next) => {
    const { username, password }=req.body
    User.create({{username,password} , (err,doc) => {
        if(err){
            return res.render('./../client/signup',{error: `{req.body.username} already exists`})

        }else {
            res.locals.id=doc._id;
            return next()
        }
    });
};


userController.verifyUser = (req,res,next) => {
    const { username , password } =req.body
    User.find({ username },(err,doc) => {
        if(err) res.render('./../client/signup', { error: 'Uh oh! '})
        if(doc.length===0) res.redirect('/signup')
        else {
            bcrypt.compare(password, doc[0].password,(error,match) => {
                if(error){
                    return res.redirect('/signup')
                }
                if(match){
                    console.log("correct password")
                    res.locals.id=doc[0]._id
                    return next()
                }
                else{
                    res.redirect('/signup')
                }
            });
        }
        })
}


module.exports =userController;