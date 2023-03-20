const sql = ("CREATE TABLE IF NOT EXISTS cartitems(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, product_id INTEGER NOT NULL, quantity INTEGER, FOREIGN KEY (user_id) REFERENCES users(id),  FOREIGN KEY (product_id) REFERENCES product(id))");

function create_cartItems_table(db){
    db.run(sql)
}

module.exports = {create_cartItems_table};

