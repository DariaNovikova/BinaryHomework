module.exports = function (req, res, next) {
    console.log({
        method: req.method,
        body: req.body, url: req.url
    });
    next();
};