'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLogin = sequelize.define('UserLogin', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {});
  UserLogin.associate = function(models) {
    // associations can be defined here
      UserLogin.hasOne(models.UserApiResult);
  };
  return UserLogin;
};