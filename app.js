require("dotenv/config");

require("./db");

const express = require("express");
const app = express();

require("./config")(app);

app.locals.appTitle = `Movies_`;

require("./routes/index.routes")(app)

require("./error-handling")(app);

module.exports = app;
