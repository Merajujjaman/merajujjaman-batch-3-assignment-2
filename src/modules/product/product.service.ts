import { TProduct } from "./product.interface"
import { Product } from "./product.model"

const createProductDB = async (payload : TProduct ) => {
    const result = await Product.create(payload)
    return result
}
const getAllProductDB = async () => {
    const result = await Product.find()
    return result
}
const getSingleProductDB = async (id : string) => {
    const result = await Product.findOne({_id : id})
    return result
}

export const productService = {
    createProductDB,
    getAllProductDB,
    getSingleProductDB
}