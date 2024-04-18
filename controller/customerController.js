import Customer from "../models/Customer.js";
import User from "../models/User.js";
import Delivery from "../models/Delivery.js";

export const createCustomer = async (req, res) =>{
    const user = await User.findById(req.params.userId);
    
    try {
        const {name, price_per_bottle } = req.body
        if(!user){
            res.status(404).json({ success: false, message: "User not found" });
        }else{
            const newCustomer = new Customer({
                name,
                price_per_bottle,
                user: user._id
            })
            const customerSaved = await newCustomer.save()
            res.status(201).json({success: true, message:"Customer succesfully created", data: customerSaved})
        } 
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: error.message})
    }

}

export const getCustomers = async(req, res) =>{
    try {
        // Buscar clientes del usuario
        const customers = await Customer.find({ user: req.params.userId });

        // Para cada cliente, buscar las entregas asociadas
        const customersWithDeliveries = await Promise.all(customers.map(async (customer) => {
            const deliveries = await Delivery.find({ customer: customer._id });
            return { customer, deliveries };
        }));

        res.status(200).json({ success: true, message: "Successfully searched", data: customersWithDeliveries });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
export const deleteCustomer = async(req, res) =>{
    try {
        const customerId = req.params.customerId
        const customer = await Customer.findByIdAndDelete(customerId)
        if(!customer){
            return res.status(404).json({success: false, message:"customer not found"})
        }else{
            return res.status(200).json({success: true, message: "customer delete succesfully", data: customer })
        }

    } catch (error) {
        
    }
}