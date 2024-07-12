import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderDetails = req.body;
    const result = await orderServices.createOrderDB(orderDetails);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while order creating",
      error,
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email) {
      const result = await orderServices.getOrderByEmail(email as string);
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for ${email}`,
        data: result,
      });
    } else {
      const result = await orderServices.getAllOrderDB();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching all orders data",
      EvalError
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllOrder,
};
