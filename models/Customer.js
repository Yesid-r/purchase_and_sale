import mongoose from "mongoose";

const customerSchema = mongoose.Schema({

    name:{
        type: String,
        required: true, 
    },
    pricce_per_bottle: {
        type: Number,
        required: true 
    }
    
},

{
    timestamps: true,
})

export default mongoose.model("Customer", customerSchema)