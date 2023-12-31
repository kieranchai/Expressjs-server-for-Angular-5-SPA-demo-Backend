var configDB = require("../../configDB");
var Foodcourtstall = require("../../database").Foodcourtstall;
var Foodcourt = require("../../database").Foodcourt;


exports.list = function (req, resp) {

    var whereClauseCat = (req.params.fc_id) ? {fc_id: parseInt(req.params.fc_id)} : {};

    Foodcourtstall
        .findAll({  
            where: whereClauseCat
        }).then(function (result) {
            resp
                .status(200)
                .type("application/json")
                .json(result);
        }).catch(function (err) {
            res.status(500).json({ error: true })
        });
}