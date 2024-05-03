import Delivery from "../models/Delivery.js";
import Customer from "../models/Customer.js";
import User from "../models/User.js";

export const createDelivery = async (req, res) => {
    const user = await User.findById(req.params.userId);
    const customer = await Customer.findById(req.body.customer_id);
    
    try {
        const { quantity, date } = req.body;

        
        const existingDelivery = await Delivery.findOne({
            user: user._id,
            customer: customer._id,
            date: new Date(date)
        });

        if (existingDelivery) {
            
            return res.status(400).json({ success: false, message: "A delivery for this user and customer on this date already exists", data: existingDelivery });
        }

        if (!user || !customer) {
            return res.status(404).json({ success: false, message: "User or customer not found" });
        }

        const newDelivery = new Delivery({
            quantity,
            date,
            user: user._id,
            customer: customer._id
        });

        const deliverySaved = await newDelivery.save();
        res.status(201).json({ success: true, message: "Delivery was created", data: deliverySaved });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const updateDelivery = async (req, res) =>{
    try {
        const {_id, quantity} = req.body
        const delivery = await Delivery.findById(_id)
        if(!delivery){
            res.status(404).json({success: false, message: "Delivery not found"})
        }else{
            const deliveryUpdate = await Delivery.findByIdAndUpdate({_id: _id}, {quantity: quantity})
            res.status(200).json({success: true, data: deliveryUpdate, message: "delivery update"})
        }
    } catch (error) {
        
    }
}

