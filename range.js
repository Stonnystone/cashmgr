module.exports = (req, res, next) => {
    res.header('Content-range', 'accounts 0-20/20')
    next()
}