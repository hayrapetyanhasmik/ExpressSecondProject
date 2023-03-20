
const sql = ("CREATE TABLE IF NOT EXISTS product(id INTEGER PRIMARY KEY, price INTEGER, description TEXT, image TEXT, created DATE, updated DATE, quantity INTEGER)");

function create_prod_table(db){
    db.run(sql)
}

module.exports = {create_prod_table};




