const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect, authAdmin, authCustomer } = require('../middleware/authMiddleware');


router.route('/newOrder').post(protect, orderController.newOrder);
router.route('/getSingleOrder/:id').get(protect, authCustomer, orderController.getSingleOrder);
router.route('/myOrders').get(protect, authCustomer, orderController.myOrders);

//Admin Routes
router.route('/getAllOrders').get(protect, authAdmin, orderController.getAllOrders);
router.route('/getOneOrder/:id').get(protect, authAdmin, orderController.getOneOrder);
router.route('/updateOrder').patch(protect, authAdmin, orderController.updateOrder);

module.exports = router;