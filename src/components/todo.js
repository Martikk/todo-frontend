module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return Todo;
};
