var Auth = function (userId, token, createAt) {
    return {
        userId: userId,
        token: token,
        createAt: createAt
    };
}

module.exports = Auth;
