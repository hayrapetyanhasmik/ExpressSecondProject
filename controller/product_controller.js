const db = require('../index').db;

function add_products(req, res){
    const {price,description,image,created,updated} = req.body;
    sql = 'INSERT INTO product(price,description,image,created,updated) VALUES(?,?,?,?,?)';
    db.run(sql, [price,description,image,created,updated],(err)=>{
        if(err){
            res.send(err)
        }
        res.send("The product successfully added")
    })
}

function get_all(req, res){
    sql = 'SELECT * FROM product';
    db.all(sql, [], (err, row)=>{
        if(err){
            res.send(err)
        }
        res.send(row)
    })
}

function get_by_id(req, res){
    const id=req.params.id
    sql = 'SELECT * FROM product WHERE id=?';
    db.get(sql, [id],(err, row)=>{
        if(err){
            res.send(err)
        }
        res.send(row)
 })
}

function update(req, res){
    const {price,description,image,created,updated} = req.body;
    const id=req.params.id
    sql = 'UPDATE product SET price=?,description=?,image=?,created=?, updated=? WHERE id=?';
    db.run(sql, [price,description,image,created,updated,id],(err)=>{
        if(err){
            res.send(err)
        }
        res.send("The product successfully updated")
    })
}

function deleted(req, res){
    const id=req.params.id
    sql = 'DELETE FROM product WHERE id=?';
    db.run(sql, [id],(err)=>{
        if(err){
            res.send(err)
        }
        res.send("The product successfully deleted")
    })
}

module.exports = {add_products, get_all, get_by_id, update, deleted}

