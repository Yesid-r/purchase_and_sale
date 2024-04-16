import Delivery from "../models/Delivery.js";
import Customer from "../models/Customer.js";
import User from "../models/User.js";

export const createDelivery = async(req, res) =>{
    const user = await User.findById(req.params.userId)
    const customer = await Customer.findById(req.body.customer_id)
    try{
        const {quantity, date} = req.body
        if(!user && customer){
            res.status(404).json({success: false, message: "User or customer not found"})
        }else{
            const newDelivery = new Delivery({
                quantity,
                date,
                user: user._id,
                customer: customer._id
            })
            const deliverySaved = await newDelivery.save()
            res.status(201).json({success: true, message: "Delivery was created", data: deliverySaved})
        }
    }
    catch(error){
        res.status(500).json({success: false, message: error.message})
    }
}   