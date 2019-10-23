module.exports = function(req, res, next) {
    console.log('Logged.')
    next()
};