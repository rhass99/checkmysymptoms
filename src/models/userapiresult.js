'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserApiResult = sequelize.define('UserApiResult', {
    sex: DataTypes.ENUM('male', 'female'),
    age: DataTypes.INTEGER,
    evidence: DataTypes.ARRAY(DataTypes.JSONB)
  }, {});
  UserApiResult.associate = function(models) {
    // associations can be defined here
      UserApiResult.belongsTo(models.UserLogin);
  };
  return UserApiResult;
};