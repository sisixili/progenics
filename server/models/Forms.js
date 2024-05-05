module.exports = (sequelize, DataTypes) => {
  // input handled by sequelize
  const Forms = sequelize.define(
    "Forms",
    {
      // MUST BE SAME NAME as variable that gets imported later
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "forms1",
    }
  );

  return Forms;
};

// NOTE: right now it returns the wrong time zone
