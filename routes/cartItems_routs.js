const {add_cartItems, get_cartItems, update_cartItems, delete_cartItems,joinAll} = require('../controller/cartitem_controller');
const {authenticateTokenUser} = require('../JWT/jwt_authenticateUser');

function create_cartItems_routes(app){
    app.post('/addCartItems',authenticateTokenUser, add_cartItems)
    app.get('/getCartItems', authenticateTokenUser, get_cartItems)
    app.put('/updateCartItems/:id',authenticateTokenUser, update_cartItems)
    app.delete('/deleteCartItems',authenticateTokenUser, delete_cartItems)
    app.get('/join',joinAll)
}

module.exports = {create_cartItems_routes}