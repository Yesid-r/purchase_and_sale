import Customer from "../models/Customer.js";

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
        const customers = await Customer.find({ user: req.params.userId });
        res.status(200).json({ success: true, message:"succesfully search",data: customers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}