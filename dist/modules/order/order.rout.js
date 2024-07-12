"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/", order_controller_1.orderControllers.createOrder);
router.get("/", order_controller_1.orderControllers.getAllOrder);
// //not found rout:
// router.all("*", (req: Request, res: Response) => {
//     res.status(400).json({
//       success: false,
//       message: "Route not found",
//     });
//   });
exports.orderRoutes = router;
