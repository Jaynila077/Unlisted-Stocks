export default function user (Sequelize, DataTypes) {
  const User = Sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pan_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    aadhar_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  },{
    paranoid: true,
    tableName: "users",
  });

  return User;
};
