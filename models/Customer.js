import mongoose from "mongoose";

const customerSchema = mongoose.Schema({

    name:{
        type: String,
        required: true, 
    },
    price_per_bottle: {
        type: Number,
        required: true 
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
    
},

{
    timestamps: true,
})

export default mongoose.model("Customer", customerSchema)