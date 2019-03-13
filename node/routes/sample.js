const sample = require("../model/sample")
module.exports = (router) => {
    router.get("/getData", (req, res) => {
        console.log("===")
        sample.find({}, (err, data) => {
            res.json(data)
        })
    })
    router.post("/postdata", (req, res) => {
        console.log(req.body.name)
      
    })
    return router
}