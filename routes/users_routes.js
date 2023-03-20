const {get_all_users, register, login} = require('../controller/user_controller');
const {authenticateTokenAdmin} = require('../JWT/jwt_authenticateAdmin');

function create_users_routes(app){
    app.get('/users', authenticateTokenAdmin, get_all_users)
    app.post('/register', register)
    app.post('/login',login)
}

module.exports = {create_users_routes}