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

export const orderControllers = {
    createOrder
}
