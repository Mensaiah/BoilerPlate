'use strict';
const {
  Model
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Profile, MembershipApplication, FounderProfile, NetworkMember, NetworkGroupMember, DealInDealflowInterest, Company, DealPermission, ChatChannel }) {
      // define association here

      User.hasOne(Profile, {
        foreignKey: "userId",
        as: 'profile'
      });
      User.hasOne(FounderProfile, {
        foreignKey: "userId",
        as: 'founderProfile'
      });
      User.hasOne(Company, {
        foreignKey: "owner",
        as: 'company'
      });
      User.hasMany(MembershipApplication, {
        foreignKey: "userId",
        as: "user"
      });

      User.hasMany(NetworkMember, {
        foreignKey: "userId",
        as: "networkMembership"
      });
      User.hasMany(NetworkGroupMember, {
        foreignKey: "userId",
        as: 'groupMemberDetails'

      });
      User.hasMany(DealInDealflowInterest, {
        foreignKey: "userId",
      });

      User.hasMany(DealPermission, {
        foreignKey: "userId",
      });

      User.hasMany(ChatChannel, {
        foreignKey: "toUserId",

      });
    }
  }

  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM(['ACTIVE', "INACTIVE"]),
      defaultValue: "ACTIVE"
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      set: function (val) {
        return this.setDataValue('email', val.toLowerCase());
      },
      validate: {
        isEmail: true
      }
    },
    customEmail: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.BIGINT
    },
    lastActive: {
      allowNull: true,
      type: DataTypes.DATE
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING
    },
    type:
    {
      type: DataTypes.STRING,
      defaultValue: "Not Specified"
    },

    showField: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    paranoid: true,

    modelName: 'User',
    timestamps: true,
  });

  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  return User;
};