import swaggerJsdoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Entries API",
      version: "1.0.0",
      description: "Simple Next.js REST API"
    }
  },
  apis: ["./app/api/**/*.ts"]
}

export const swaggerSpec = swaggerJsdoc(options)