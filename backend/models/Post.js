const dbConn = require('../config/db_connection');
const {DataTypes} = require('sequelize');

// defining the structure of the post model
const Post = dbConn.define('post', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    sub_title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    }
}, 
    // defining table name
    {
        tableName: 'posts'
    }
);

Post.sync()

module.exports = Post;