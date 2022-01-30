var User = function (userId, username, password, email) {
    return {
        userId: userId,
        username: username,
        password: password,
        email: email
    };
}

module.exports = User;