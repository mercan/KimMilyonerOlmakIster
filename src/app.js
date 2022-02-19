// Fastify
const Fastify = require("fastify");

// Plugins
const fastifyCorsPlugin = require("fastify-cors");
const fastifyHelmetPlugin = require("fastify-helmet");
const fastifySwaggerPlugin = require("fastify-swagger");

// Config
const swaggerConfig = require("./config/swagger.js");

// Routes
const routes = require("./api/routes/index.js");

// Database Connection for MongoDB
require("./helpers/database")();

/**
 * @param {Object} options - Fastify Options default to empty object
 * @returns {Object} Fastify Instance
 */
module.exports = (options = {}) => {
  // Create Fastify Instance
  const fastify = Fastify(options);

  // Initialize Plugins
  fastify.register(fastifyCorsPlugin, {
    origin: [
      "http://localhost:3000",
      "https://kimmilyonerolmakister.herokuapp.com/",
    ],
  });
  fastify.register(fastifyHelmetPlugin);
  fastify.register(fastifySwaggerPlugin, swaggerConfig);

  // Initialize Routes
  routes.forEach((route) => fastify.route(route));

  // Return Fastify Instance
  return fastify;
};
