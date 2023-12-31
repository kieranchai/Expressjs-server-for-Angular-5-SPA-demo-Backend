var configDB = require("../../configDB");
var Foodcourt = require("../../database").Foodcourt;


exports.list = function (req, resp) {
    Foodcourt
        .findAll(  // select * from foodcourt
        ).then(function (result) {
            resp
                .status(200)
                .type("application/json")
                .json(result);
        }).catch(function (err) {
            res.status(500).json({ error: true })
        });
}

exports.create = function (req, resp) {
    if (!req.body.info) {
        resp.status(400).json({error: true})
    } else {
        var newInfo = req.body.info;

        Foodcourt.create(newInfo)
        .then(function (newRecord) {
            resp.status(200).type("application/json").json(newRecord);
        }).catch(function (err) {
            resp.status(500).json({error:true})
        });
    }
}