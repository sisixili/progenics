module.exports = (sequelize, DataTypes) => {
  // input handled by sequelize. Establish connection to database with following table def
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
      dob: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deliv_hospital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deliv_date: {
        type: DataTypes.CHAR(10), 
        allowNull: false,
      },
      deliv_time: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      collect_phys: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      babys_sex: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      birth_weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      tableName: "form2",
      updatedAt: false,
    }
  );

  return Forms;
};

// NOTE: right now it returns the wrong time zone

/*
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
*/