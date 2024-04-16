import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const deliverySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    date: {
        type: Date
    },
    quantity: {
        type: Number
    }
},{timestamps: true})

export default mongoose.model("Delivery", deliverySchema)