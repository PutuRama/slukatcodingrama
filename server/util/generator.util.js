function generateId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJ-KLMNOPQRSTUVWXYZabcdef-ghijklmnopqrstuvwxyz0123456789-';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

module.exports = {
    generateToken: function () {
        return generateId(30);
    },
    generateUserId: function () {
        return generateId(10);
    },
    generateItemId: function () {
        return generateId(20);
    }
}