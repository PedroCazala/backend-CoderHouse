var express = require("express");
var router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: el nombre de un producto
 *        precio:
 *          type: integer
 *          description: el precio de un producto
 *      required:
 *        - nombre
 *        - precio
 *      example:
 *        nombre: teclado
 *        precio: 10000
 * */
router.use(express.urlencoded({ extended: true }));

router.get("/", function (req, res, next) {
  res.render("form");
});
/**
 * @swagger
 * /products:
 *  post:
 *    sumMary: Creación de un nuevo Producto
 *    tags: [Product]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: nuevo producto creado
 */
router.post("/", function (req, res, next) {
  console.log("body", { ...req.body });
  res.redirect("/products");
});
router.put("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.delete("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
