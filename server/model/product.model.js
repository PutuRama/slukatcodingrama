var Product = function (userId, title, desc, imageUrl , contact) {
    return {
        userId: userId,
        title: title,
        desc: desc,
        imageUrl: imageUrl,
        contact : contact
    };
}

module.exports = Product;
