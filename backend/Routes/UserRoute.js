const express = require('express');

const route = express.Router();

const user = require('../Models/User')

route.get('/getUser',async (req, res) => {
    const data = await user.find({})

    res.send({data})
});
route.post('/saveUser',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const gender = req.body.gender;
    const result = await user.create({
        username: username,password:password,email:email,mobileNumber:"123456789", gender:gender
    })

    res.send(result)
    

})


route.post('/verifyUser',async(req,res)=>{
    console.log('this is to verify the user')
    console.log(req.body)
    const username = req.body.userName;
    const password = req.body.password;

    const result =await user.find({username: username});
    console.log(result)
    if(result[0]){

        
            if(result[0].password == password){
                ///successfull login
                res.send({status:"1",message:"success",data:result,response:"1"})
            }else{
                ///incorrect password
                
                res.send({status:"0",message:"failed",data:"password incorrect",response:"0"})
            }
       
    }else{
        res.send({status:"0",message:"failed",data:"email incorrect",response:"0"})
    }
    

})

module.exports = route;
