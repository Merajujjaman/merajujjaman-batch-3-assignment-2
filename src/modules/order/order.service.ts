import { isValidObjectId } from "mongoose";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderDB = async (payload: TOrder) => {
  if (!isValidObjectId(payload.productId)) {
    throw new Error("Invalid product ID");
  }

  const productData = await Product.findById(payload.productId);

  if (!productData) {
    throw new Error("Product not found");
  }
  if (productData.inventory.quantity < payload.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  productData.inventory.quantity -= payload.quantity;
  productData.inventory.inStock = productData.inventory.quantity > 0;

  await Product.findByIdAndUpdate(payload.productId, { $set: productData });

  const result = await Order.create(payload);
  return result;
};

const getAllOrderDB = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmail = async (email: string) => {
  const result = await Order.find({ email: email });
  if (result.length !== 0) {
    return result;
  } else {
    throw new Error(`No orders found for the email: ${email}`);
  }
  // return result
};

export const orderServices = {
  createOrderDB,
  getAllOrderDB,
  getOrderByEmail,
};
