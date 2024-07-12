import express from "express"
import { orderControllers } from "./order.controller"

const router = express.Router()

router.post("/", orderControllers.createOrder)
router.get("/", orderControllers.getAllOrder)

// //not found rout:
// router.all("*", (req: Request, res: Response) => {
//     res.status(400).json({
//       success: false,
//       message: "Route not found",
//     });
//   });


export const orderRoutes = router