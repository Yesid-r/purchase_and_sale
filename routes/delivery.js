import express from 'express'
import { createDelivery, updateDelivery } from '../controller/DeliveryController.js'
const router = express.Router()

router.post('/createDelivery/:userId', createDelivery)
router.put('/updateDelivery', updateDelivery)

export default router