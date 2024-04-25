import express from 'express'
import {createCustomer, deleteCustomer, getCustomer, getCustomers, getCustomersOnDateWithoutDelivery} from './../controller/customerController.js'


const router = express.Router()

router.post('/createCustomer/:userId', createCustomer)
router.get('/getCustomers/:userId', getCustomers)
router.delete('/deleteCustomer/:customerId', deleteCustomer)
router.get('/getCustomer/:customerId', getCustomer)
router.get('/customers/:userId/:date', getCustomersOnDateWithoutDelivery)

export default router