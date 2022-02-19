const { env, port } = require("./index");

module.exports = {
  routePrefix: "/documentation",
  openapi: {
    info: {
      title: "Kim Milyoner Olmak İster API",
      version: "1.0.0",
      contact: {
        name: "İbrahim Can Mercan",
        email: "imrcn77@gmail.com",
      },
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    servers: [
      {
        url:
          env === "development"
            ? `http://localhost:${port}`
            : "https://kimmilyonerolmakister.herokuapp.com",
        description: env === "development" ? "Development" : "Production",
      },
    ],
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Questions", description: "Questions end-points" }],
  },
  staticCSP: true,
  exposeRoute: true,
};
