import swaggerJsdoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentacion de Api Curso de node Rest",
        version: "1.0"
    },
    servers: [
        {
            url: "http://localhost:3001/api"
        }
    ]
}

const options = {
    swaggerDefinition: swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
}

const openApiConfig = swaggerJsdoc(options)

export {openApiConfig}