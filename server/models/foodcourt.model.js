var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define(
        "foodcourt",
        {
            fc_id : {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            fc_name: {
                type: Sequelize.STRING(50),
                primaryKey: true,
                allowNull: false
            },
            location: {
                type: Sequelize.STRING(100),
                primaryKey: false,
                allowNull: false
            },
            op_hours: {
                type: Sequelize.STRING(100),
                primaryKey: false,
                allowNull: false
            },
            fc_img01: {
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
            },
            fc_img02: {
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
            }
        },
        {
            tableName: 'foodcourts',
            timestamps: false
        }
    );

}