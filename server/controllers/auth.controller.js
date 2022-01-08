const db = require("../db/db");
const passwordHash = require("password-hash");

module.exports = {
    signup : async function(req,res){

        hashedPassword =  passwordHash.generate(req.body.password);
    
        const newUser = {
            username : req.body.username,
            password : hashedPassword
        }
    
        const dbConnect = db.getDb();
    
        dbConnect
        .collection("user")
        .insertOne(newUser,function(err,result){
            if(err){
                return res.json({
                    ok:false,
                    message:"Failed add new User",
                    data:null
                })
            }
    
            return res.json({
                ok:true,
                message:"Success add new user",
                data:result
            })
        });
    
    },
    login : async function(req,res){

        
        if(req.body.username == null || req.body.password == null){
            return res.json({
                ok:false,
                statusCode:"INVALID_INPUT",
                message: "your input is invalid",
                data:null
            });
        }
    
        const dbConnect = db.getDb();
    
        dbConnect
        .collection("user")
        .find({username:req.body.username})
        .toArray(function(err, result){
    
            if(err){
                return res.json({
                    ok:false,
                    statusCode:"INTERNAL_SERVER_ERROR",
                    message: err,
                    data:null
                });
            }
    
            if(!passwordHash.verify(req.body.password , result[0].password)){
                return res.json({
                    ok:false,
                    statusCode:"WRONG_PASSWORD",
                    message:"Your Password is wrong!",
                    data:null
                })
            }
    
            return res.json({
                ok:true,
                message:"You are logged in",
                data:""
            })
        })
    }
}