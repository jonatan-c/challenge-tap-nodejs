const express = require("express");
const PORT = process.env.PORT_SERVER || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Documentation Swagger Interface
const { serve, setup } = require("swagger-ui-express");
const { configSwagger } = require("./documentation/config.swagger");
const swaggerJSDocs = require("swagger-jsdoc")(configSwagger); 

app.use("/api/docs", serve, setup(swaggerJSDocs));

//routes
const gameRoutes = require("./routes/index");

app.use("/game", gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}/game`);
  console.log(`Server is running in http://localhost:${PORT}/api/docs`);
});

module.exports = app;
