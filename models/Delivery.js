import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const deliverySchema = mongoose.Schema({
    usuer_id: {
        type: ObjectId
        
    },
    client_id: {
        type: ObjectId
    },
    date: {
        type: Date
    },
    quantity: {
        type: Number
    }
},{timestamps: true})

export default mongoose.model("Delivery", deliverySchema)