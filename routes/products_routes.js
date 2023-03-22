const {add_products, get_all, get_by_id, update, deleted} = require('../controller/product_controller');
const {authenticateTokenAdmin} = require('../JWT/jwt_authenticateAdmin');

function create_products_routes(app){
    app.post('/products/create', authenticateTokenAdmin, add_products)
    app.get('/products', get_all)
    app.get('/products/:id', get_by_id)
    app.put('/products/update/:id', authenticateTokenAdmin, update)
    app.delete('/products/del/:id', authenticateTokenAdmin, deleted)
   
}

module.exports = {create_products_routes}




