
// posts table model
module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
        postID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        hashtags: {
            type: Sequelize.TEXT,
            allowNull: false,
            get: function () { return JSON.parse(this.getDataValue('hashtags')).join(' ')},
            set: function (hashtags) {this.setDataValue('hashtags', JSON.stringify(hashtags.split(' ')))},
        },
        topic: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        article: {
            type: Sequelize.TEXT('long'),
            allowNull: false,
        },
        imageUrl: {
            type: Sequelize.STRING
        },
        postCommentsModifiedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        readings: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        readers: {
            type: Sequelize.TEXT,
            get: function () {return JSON.parse(this.getDataValue('readers'))},
            set: function (readers) {this.setDataValue('readers', JSON.stringify(readers))},
            defaultValue: "[]",
        },
        likes: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        likers: {
            type: Sequelize.TEXT,
            get: function () {return JSON.parse(this.getDataValue('likers'))},
            set: function (likers) {this.setDataValue('likers', JSON.stringify(likers))},
            defaultValue: "[]",
        },
        isPublish: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }        
    });
    return Post;
};