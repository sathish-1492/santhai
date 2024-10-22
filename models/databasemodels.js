const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

// Configuration Model
const Configuration = sequelize.define('CONFIGURATION', {
    CONFIGURATION_ID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    APP_NAME: { type: DataTypes.STRING, allowNull: false },
    APP_DEVELOPER: { type: DataTypes.STRING, allowNull: false },
    APP_EMAIL: { type: DataTypes.STRING, allowNull: false },
    DEVELOPER_EMAIL: {
        type: DataTypes.JSON,
        allowNull: false
    },
    VERSION: { type: DataTypes.FLOAT, allowNull: false },
    STORAGE: { type: DataTypes.JSON },
    API: { type: DataTypes.JSON },
    EDITOR: { type: DataTypes.JSON },
    PLANS: { type: DataTypes.JSON }
}, {
    timestamps: true,
    initialAutoIncrement: '1000000001', // Start ID with 10 digits
    tableName: 'CONFIGURATION',
    createdAt: 'CREATED_TIME',
    updatedAt: 'UPDATED_TIME',
});

module.exports = { Configuration };

