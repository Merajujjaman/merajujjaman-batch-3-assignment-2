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

const updateProductDB = async(id: string, payload: Partial<TProduct>) => {
    const result = await Product.findByIdAndUpdate(
        id,
        {$set: payload},
        {new: true}
    )

    return result
}

const deleteProdectDB = async(id : string) => {
    const result = await Product.findByIdAndDelete(id)

    if (result) {
        return null;
    }

    return result; 
    
}

export const productService = {
    createProductDB,
    getAllProductDB,
    getSingleProductDB,
    updateProductDB,
    deleteProdectDB
}