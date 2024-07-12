"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_rout_1 = require("./modules/product/product.rout");
const order_rout_1 = require("./modules/order/order.rout");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/products", product_rout_1.ProductRoutes);
app.use("/api/orders", order_rout_1.orderRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
//not found rout:
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
