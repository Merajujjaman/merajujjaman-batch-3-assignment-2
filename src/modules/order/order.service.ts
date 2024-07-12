import { TOrder } from "./order.interface"
import { Order } from "./order.model"

const createOrderDB = async(payload: TOrder) => {
    const result = await Order.create(payload)
    return result
}
const getAllOrderDB = async() => {
    const result = await Order.find()
    return result
}

const getOrderByEmail = async(email: string) => {
    const result = await Order.find({emails: email})
    if(result.length !== 0){

        return result
    }else{
       return `No orders found for the email: ${email}`
    }
}

export const orderServices = {
    createOrderDB,
    getAllOrderDB,
    getOrderByEmail
}