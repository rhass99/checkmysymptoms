'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};

exports.default = userModel;
//# sourceMappingURL=user.js.map