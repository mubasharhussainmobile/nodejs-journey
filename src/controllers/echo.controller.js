const makeEcho = (req, res) => {
    res.json({received: req.body})
}

module.exports = {makeEcho};