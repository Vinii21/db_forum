const postRoutes = require("./posts.route");
const userRoutes = require("./users.route");
const categoriesRoutes = require("./categories.routes");
const answerRoutes = require("./answers.route");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../../swagger.json");

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(postRoutes);
  app.use(categoriesRoutes);
  app.use(answerRoutes)
  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
};

module.exports = apiRoutes;
