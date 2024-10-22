const { sequelize, connectDB } = require('../models/db');
const { configuration, subscription, User } = require('../models/databasemodels');

const createTable = async () => {
    try {
        connectDB();
        console.log('Connection has been established successfully.');

        // Sync all models
        await sequelize.sync({ force: true });
       // await user.sync({ force: true });
        //  await user.sync({ force: true });

        console.log('Tables have been created.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
};

createTable();



