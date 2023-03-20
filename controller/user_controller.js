const db = require('../index').db;
const CryptoJS = require('crypto-js');
const jwt_generate = require("../JWT/jwt_generate");


function get_all_users(req, res){
    db.all('SELECT * FROM users', [], (err, row)=>{
        if(err){
            res.send(err)
        }
        res.send(row)
    })
} 

function register(req, res){
    const {username, password} = req.body;
    const hashed_password = CryptoJS.SHA256(password).toString();
    const sql = 'INSERT INTO users(role,username,password) VALUES (?,?,?)';
    db.run(sql, ["user", username, hashed_password],(err)=>{ //set dafault value of role 
        if(err){
            res.send("Error Registering")
        }
        res.send("User Created")
    })  

}
function login(req,res){
    const {username, password}  = req.body;
    const hashed_password = CryptoJS.SHA256(password).toString();
    const sql = 'SELECT * FROM users WHERE username=?';
    db.get(sql,[username],(err,row)=>{
        if(username === row.username && hashed_password === row.password){
        const token = jwt_generate.generateAccessToken(username,row.role); //we can put any value from the table, minimum one. these values are token's middle string -PAYLOAD:DATA.
            res.send({status:'Logged in', jwt: token});
       }else{
           res.send({status:'Wrong credentials'});
       }
    })
}


module.exports = {get_all_users, register, login}