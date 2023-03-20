const sql = ("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, role text, username text, password text)");

function create_users_table(db){
    db.run(sql)
}

module.exports = {create_users_table};

