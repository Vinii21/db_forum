const postRoutes = require("./posts.route");
const userRoutes = require("./users.route");
const categoriesRoutes = require("./categories.routes")

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(postRoutes);
  app.use(categoriesRoutes);
};

module.exports = apiRoutes;