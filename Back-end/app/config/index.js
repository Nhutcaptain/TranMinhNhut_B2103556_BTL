const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb+srv://likitruyen:n1522003@nhuttran.cxdrtbg.mongodb.net/bookstore?retryWrites=true&w=majority',
    }
};

module.exports = config;