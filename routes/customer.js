import express from 'express'
import {createCustomer, getCustomers} from './../controller/customerController.js'


const router = express.Router()

router.post('/createCustomer/:userId', createCustomer)
router.get('/getCustomers/:userId', getCustomers)

export default router