const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/db.config")

const Student = sequelize.define("students", {
  student_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
  last_name: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
  middle_name: {
    type: DataTypes.TEXT('tiny'),
    allowNull: true
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  is_bfu_student: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  education_level: {
    type: DataTypes.ENUM('СПО','Специалитет','Бакалавриат','Магистратура','Аспирантура'),
    allowNull: false
  },
  group_name: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
  year: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false
  },
  peer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  paranoid: true,
  timestamps: true
});

module.exports = Student
