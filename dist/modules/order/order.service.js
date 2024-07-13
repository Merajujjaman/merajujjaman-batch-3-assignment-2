"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrderDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, mongoose_1.isValidObjectId)(payload.productId)) {
        throw new Error("Invalid product ID");
    }
    const productData = yield product_model_1.Product.findById(payload.productId);
    if (!productData) {
        throw new Error("Product not found");
    }
    if (productData.inventory.quantity < payload.quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    productData.inventory.quantity -= payload.quantity;
    productData.inventory.inStock = productData.inventory.quantity > 0;
    yield product_model_1.Product.findByIdAndUpdate(payload.productId, { $set: productData });
    const result = yield order_model_1.Order.create(payload);
    return result;
});
const getAllOrderDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({ email: email });
    if (result.length !== 0) {
        return result;
    }
    else {
        throw new Error(`No orders found for the email: ${email}`);
    }
    // return result
});
exports.orderServices = {
    createOrderDB,
    getAllOrderDB,
    getOrderByEmail,
};
