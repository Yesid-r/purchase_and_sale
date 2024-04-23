import express from 'express'
import {createCustomer, deleteCustomer, getCustomer, getCustomers} from './../controller/customerController.js'


const router = express.Router()

router.post('/createCustomer/:userId', createCustomer)
router.get('/getCustomers/:userId', getCustomers)
router.delete('/deleteCustomer/:customerId', deleteCustomer)
router.get('/getCustomer/:customerId', getCustomer)

export default router