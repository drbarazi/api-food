module.exports = function (app) {
    const foodControllers = require("../controllers/food.controller.js");

    app.post("/foods", foodControllers.create);
    app.get("/foods", foodControllers.showAll);
    app.get("/foods/:foodId", foodControllers.show);
    app.put("/foods/:foodId", foodControllers.update);
    app.delete("/foods/:foodId", foodControllers.destroy);
};
