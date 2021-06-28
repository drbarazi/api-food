module.exports = (sequelize, Sequelize) => {
    const Food = sequelize.define("foods", {
        name: {
            type: Sequelize.STRING(100),
        },
        price: {
            type: Sequelize.INTEGER,
        },
        outlet: {
            type: Sequelize.STRING(100),
        },
        description: {
            type: Sequelize.TEXT,
        },
        image_url: {
            type: Sequelize.TEXT,
        },
    });
    return Food;
}