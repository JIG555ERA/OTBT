const express = require('express')
const {createTask, getAllTask, getTaskbyID, getTaskbyIDandDel, getTaskbyIDandUpdate} = require('../controllers/OTBTControllers.js')

const router = express.Router();

router.post('/createTask', createTask);
router.get('/getAllTask', getAllTask);
router.get('/getTaskbyID', getTaskbyID);
router.delete('/getTaskbyIDandDel', getTaskbyIDandDel);
router.patch('/getTaskbyIDandUpdate', getTaskbyIDandUpdate);

module.exports = router;