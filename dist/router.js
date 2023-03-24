"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var update_1 = require("./handlers/update");
var product_1 = require("./handlers/product");
var middleware_1 = require("./modules/middleware");
var updatePoints_1 = require("./handlers/updatePoints");
var router = (0, express_1.Router)();
// Products routes
router.get('/product', product_1.getProducts);
router.post('/product', (0, express_validator_1.body)('name').isString(), middleware_1.handleInputErrors, product_1.createProduct);
router.put('/product/:id', (0, express_validator_1.body)('name').isString(), middleware_1.handleInputErrors, product_1.updateProduct);
router.get('/product/:id', product_1.getOneProduct);
router["delete"]('/product/:id', product_1.deleteProduct);
//Update routes
router.get('/update', update_1.getUpdates);
router.post('/update', (0, express_validator_1.body)('title').exists().isString(), (0, express_validator_1.body)('body').exists().isString(), (0, express_validator_1.body)('productId').exists().isString(), update_1.createUpdate);
router.put('/update/:id', (0, express_validator_1.body)('title').optional(), (0, express_validator_1.body)('body').optional(), (0, express_validator_1.body)('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED']), (0, express_validator_1.body)('version').optional(), update_1.updateUpdate);
router.get('/update/:id', update_1.getOneUpdate);
router["delete"]('/update/:id', update_1.deleteUpdate);
//Update Points routes
router.get('/updatePoints', updatePoints_1.getUpdatePoints);
router.post('/updatePoints', (0, express_validator_1.body)('name').optional().isString(), (0, express_validator_1.body)('description').optional().isString(), (0, express_validator_1.body)('updateId').exists().isString(), updatePoints_1.createUpdatePoint);
router.put('/updatePoints/:id', (0, express_validator_1.body)('name').optional().isString(), (0, express_validator_1.body)('description').optional().isString(), updatePoints_1.updateUpdatePoint);
router.get('/updatePoints/:id', updatePoints_1.getOneUpdatePoint);
router["delete"]('/updatePoints/:id', updatePoints_1.deleteUpdatePoint);
//User routes
exports["default"] = router;
//# sourceMappingURL=router.js.map