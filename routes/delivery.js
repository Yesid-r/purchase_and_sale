import express from 'express'
import { createDelivery } from '../controller/DeliveryController.js'
const router = express.Router()

router.post('/createDelivery/:userId', createDelivery)

export default router