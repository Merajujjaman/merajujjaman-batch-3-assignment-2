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
exports.productService = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("./product.model");
const createProductDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
const getAllProductDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
const getSingleProductDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new Error("Invalid product ID");
    }
    const result = yield product_model_1.Product.find({ _id: id });
    if (result.length !== 0) {
        return result;
    }
    else {
        throw new Error(`Not found any product for the id: ${id}`);
    }
});
const updateProductDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new Error("Invalid product ID");
    }
    const findProduct = yield product_model_1.Product.findById(id);
    if (!findProduct) {
        throw new Error(`Product not found for this id:${id}`);
    }
    const result = yield product_model_1.Product.findByIdAndUpdate(id, { $set: payload }, { new: true });
    if (result) {
        return result;
    }
});
const deleteProdectDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    if (result) {
        return null;
    }
    return result;
});
const searchProductDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const searchText = new RegExp(searchTerm, "i");
    const result = yield product_model_1.Product.find({
        $or: [
            { name: { $regex: searchText } },
            { description: { $regex: searchText } },
        ],
    });
    if (result.length !== 0) {
        return result;
    }
    else {
        throw new Error(`Not found any product for this search: ${searchTerm}`);
    }
});
exports.productService = {
    createProductDB,
    getAllProductDB,
    getSingleProductDB,
    updateProductDB,
    deleteProdectDB,
    searchProductDB,
};
