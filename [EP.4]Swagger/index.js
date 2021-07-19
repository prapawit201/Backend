const express = require("express");
const bodyParser = require("body-parser");
const swaggerDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const PORT = process.env.PORT || 5000;
const dataController = require("./routes/data");
const swaggerJSDoc = require("swagger-jsdoc");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//https://swagger.io/specification/
const swaggerOption = {
  swaggerDefinition: {
    info: {
      title: "Custom API",
      description: "API Information",
      contact: {
        name: "API Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // ['./route/*.js']
  apis: ["index.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOption);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  res.send("Hello");
});
//reference : https://github.com/JayaramachandranAugustin/EmployeeManagementService/blob/main/index.js

/**
 * @swagger
 * definitions:
 *  Data:
 *   type: object
 *   properties:
 *    dataName:
 *     type: string
 *     description: name of the data
 *     example: 'test'
 *    dataValue:
 *     type: string
 *     description: value of data
 *     example: 'data'
 *    dataStatus:
 *     type: int
 *     description: status of data
 *     example: 1
 *    dataDate:
 *     type: string
 *     description: date of data
 *     example: '26/12/2563'
 *    date:
 *     type: string
 *     description: timestamp of data
 *     example: '26/12/2563, 21:39:00'
 */

/**
 * @swagger
 * /api/update/data/{id}:
 *  put:
 *   summary: update data
 *   description: update data
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the data
 *      example: 1
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/Data'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Data'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Data'
 */

/**
 * @swagger
 * /api/get/data:
 *  get:
 *   summary: get all teams
 *   description: get all teams
 *   responses:
 *    200:
 *     description:
 *     content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/Data'
 */

/**
 * @swagger
 * /api/get/{dataId}:
 *  get:
 *   summary: get data from dataid
 *   description: get data
 *   parameters:
 *    - in: path
 *      name: dataId
 *      schema:
 *       type: integer
 *      required: true
 *      description: Id of the data
 *      example: 1
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */

/**
 * @swagger
 * /api/create/data:
 *  post:
 *   summary: create data assignment
 *   description: create data assignment
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: employee assignment of the team
 *      schema:
 *       $ref: '#/definitions/Data'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Data'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */

/**
 * @swagger
 * /api/delete/data/{dataId}:
 *  delete:
 *   summary: delete data from dataid
 *   description: delete data
 *   parameters:
 *    - in: path
 *      name: dataId
 *      schema:
 *       type: integer
 *      required: true
 *      description: Id of the data
 *      example: 1
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.use("/api", dataController);

app.listen(PORT, () => {
  console.log("Server start port : " + PORT);
});
