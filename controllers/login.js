var User = require('../models/User');

// var fn_index = async(ctx, next) => {
//     ctx.response.body = `<h1>Index</h1>
//         <form action="/login" method="post">
//             <p>Name: <input name="username"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// };

var fn_login = async(ctx, next) => {
    var
        username = ctx.request.body.username || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${username}, password: ${password}`);
    var users = await User.findAll({
        attributes: ['id', 'username', 'password'],
        where: {
            username: username,
            password: password
        }
    });
    console.log(JSON.stringify(users));
    if (users.length > 0) {
        ctx.response.body = JSON.stringify(users[0]);
    } else {
        ctx.response.body = 0;
    }
};

module.exports = {
    // 'GET /api': fn_index,
    'POST /api/login': fn_login
};