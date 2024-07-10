import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productDetailt = req.body;
  try {
    const result = await productService.createProductDB(productDetailt);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while creating product data",
    });
  }
};
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching data",
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct
};
