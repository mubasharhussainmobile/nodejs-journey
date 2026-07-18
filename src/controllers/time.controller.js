const tellTime = (req, res) => {
    res.json({time : new Date()})
}

module.exports = {tellTime}