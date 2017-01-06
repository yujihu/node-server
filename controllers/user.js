var User = require('../models/User');

var fn_addUser = async(ctx, next) => {
    var now = Date.now();
    var
        username = ctx.request.body.username || '',
        password = ctx.request.body.password || '';
    console.log(`add user with name: ${username}, password: ${password}`);
    var user = await User.create({
        username: username,
        password: password,
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(user));
    ctx.response.body = user;
};

var fn_deleUser = async(ctx, next) => {
    var now = Date.now();
    var id = ctx.params.id;
    console.log(`delete user with id: ${id}`);
    var result = await User.destroy({
        where: {
            id: id
        }
    });
    console.log('delete: ' + result);
    ctx.response.body = result;
};

var fn_getUsers = async(ctx, next) => {
    var users = await User.findAll({});
    console.log(JSON.stringify(users));
    if (users.length > 0) {
        ctx.response.body = JSON.stringify(users);
    } else {
        ctx.response.body = 0;
    }
};

var fn_getUserById = async(ctx, next) => {
    var id = ctx.params.id;
    var users = await User.findAll({
        where: {
            id: id
        }
    });
    console.log(JSON.stringify(users));
    if (users.length > 0) {
        ctx.response.body = JSON.stringify(users[0]);
    } else {
        ctx.response.body = 0;
    }
};

var fn_updUser = async(ctx, next) => {
    var
        id = ctx.request.body.id || '',
        username = ctx.request.body.username || '',
        password = ctx.request.body.password || '';
    var result = await User.update({
        username: username,
        password: password
    }, {
        where: {
            id: id
        }
    });
    console.log('update：' + result);
    ctx.response.body = result;
};

module.exports = {
    'GET /api/user': fn_getUsers,
    'GET /api/user/:id': fn_getUserById,
    'POST /api/user': fn_addUser,
    'DELETE /api/user/:id': fn_deleUser,
    'PUT /api/user': fn_updUser
};