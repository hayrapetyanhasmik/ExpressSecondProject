const db = require('../index').db;

function get_cartItems(req, res) {
    db.all("SELECT * FROM cartItems", [], (err, row) => {
      if(err){
        res.send(err)
      }
      res.send(row);
    });
}

function add_cartItems(req, res){
    const {user_id,product_id,quantity} = req.body;
    sql = 'INSERT INTO cartitems(user_id,product_id,quantity) VALUES(?,?,?)';
    db.run(sql,[user_id,product_id,quantity], (err)=>{
        if(err){
            res.send(err)
        }
        res.send('The item successfully added to the cart')
    })
}
    
function update_cartItems(req,res){
    const {quantity} = req.body;
    const {id}= req.params;
    sql = 'UPDATE cartitems SET quantity=? WHERE id=?';
    db.run(sql,[quantity, id], (err,row)=>{
        if(err){
            res.send(err)
        }
        res.send('The item successfully updated')
    })
}

function delete_cartItems(err,row){
    const{id} = req.params
    sql = 'DELETE FROM cartitems WHERE id=?';
    db.run(sql,[id], (req,res)=>{
        if(err){
            res.send(err)
        }
        res.send('The item successfully deleted')
    })
}


function joinAll(req, res){
    sql = 'SELECT users.username, product.description, cartitems.quantity FROM cartitems JOIN users ON users.id = cartitems.user_id JOIN product ON product.id = cartitems.product_id';
    db.all(sql, [], (err,row)=>{
        if(err){
            res.send(err);
        }
        res.send(row)
    })
}


module.exports={add_cartItems, get_cartItems, update_cartItems, delete_cartItems, joinAll}


