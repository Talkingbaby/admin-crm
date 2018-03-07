module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        // Giving the Author model a name of type STRING
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.SMALLINT,
        jobTitle: DataTypes.STRING
    });
    return Employee;
};