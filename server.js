const express = require('express');
const app = express();
app.use(express.json());
const port = require('./constants').port;
const db = require('./index').db;
const {create_users_table} = require('./models/user_schema');
const {create_users_routes} = require('./routes/users_routes');
const {create_products_routes} = require('./routes/products_routes');
const {create_cartItems_routes} = require('./routes/cartItems_routs');
const {create_prod_table} = require('./models/product_schema');
const {create_cartItems_table} = require('./models/cartItems_schema');



create_users_table(db);
create_prod_table(db);
create_cartItems_table(db);
create_users_routes(app);
create_cartItems_routes(app);
create_products_routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})