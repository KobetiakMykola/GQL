'use strict';
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Books', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING
            },
        },
        {
            tableName: 'Books',
            timestamps: false
        }
    );

    return Book;
};