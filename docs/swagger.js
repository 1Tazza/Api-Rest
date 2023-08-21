import swaggerJsdoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.1.0",
    info: {
        title: "Documentacion de Api Curso de node Rest",
        version: "2.0.0"
    },
    servers: [
        {
            url: "http://localhost:3001/"
        }
    ],
    components: {
        securitySchemes:{
            bearerAuth:{
                type:"http",
                scheme:"bearer"
            }
        },
        schemas:{
            authLogin: {
                type: "object",
                required: ["email", "password"],
                properties: {
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  }
                },
              },
            authRegister: {
                type: "object",
                required: ["email", "password", "age", "name"],
                properties: {
                  name: {
                    type: "string",
                  },
                  age: {
                    type: "integer",
                  },
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                },
              },
            track: {
                type: "object",
                required: ["name", "album", "cover"],
                properties: {
                    name: {
                        type: "string"
                    },
                    album: {
                        type: "string"
                    },
                    cover: {
                        type: "string"
                    },
                    artist: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string"
                            },
                            nickname: {
                                type: "string"
                            },
                            nationality: {
                                type: "string"
                            }
                        }
                    },
                    duration: {
                        type: "object",
                        properties: {
                            start: {
                                type: "integer"
                            },
                            end: {
                                type: "integer"
                            }
                        }
                    },
                    mediaId: {
                        type: "integer"
                    }
                }
            },
            storage: {
                type: "object",
                properties: {
                  url: {
                    type: "string",
                  },
                  filename: {
                    type: "string",
                  },
                },
              }
        }
    }
}

const options = {
    swaggerDefinition: swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
}

const openApiConfig = swaggerJsdoc(options)

export {openApiConfig}