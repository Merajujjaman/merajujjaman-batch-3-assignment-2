import { isValidObjectId } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProductDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductDB = async (id: string) => {
  if (!isValidObjectId(id)) {
    throw new Error("Invalid product ID");
  }
  const result = await Product.find({ _id: id });

  if (result.length !== 0) {
    return result;
  } else {
    throw new Error(`Not found any product for the id: ${id}`);
  }
};

const updateProductDB = async (id: string, payload: Partial<TProduct>) => {
  if (!isValidObjectId(id)) {
    throw new Error("Invalid product ID");
  }

  const findProduct = await Product.findById(id);
  if (!findProduct) {
    throw new Error(`Product not found for this id:${id}`);
  }

  const result = await Product.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true }
  );
  if (result) {
    return result;
  }
};

const deleteProdectDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);

  if (result) {
    return null;
  }

  return result;
};

const searchProductDB = async (searchTerm: string) => {
  const searchText = new RegExp(searchTerm, "i");

  const result = await Product.find({
    $or: [
      { name: { $regex: searchText } },
      { description: { $regex: searchText } },
    ],
  });

  if (result.length !== 0) {
    return result;
  } else {
    throw new Error(`Not found any product for this search: ${searchTerm}`);
  }
};

export const productService = {
  createProductDB,
  getAllProductDB,
  getSingleProductDB,
  updateProductDB,
  deleteProdectDB,
  searchProductDB,
};
