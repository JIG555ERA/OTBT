const OTBT = require('../models/OTBTSchema')

exports.createTask = async(req, res) => {
    try {
        let otbt = new otbt(req.body)
        await TransformStreamDefaultController.save();
        res.json({
            success: true
        })
    } catch(error) {
        res.json({
            success: false,
            error: error
        })
    }

};

exports.getAllTask = async(req, res) => {
    try {
        const otbt_01 = await OTBT.find()
        res.json({
            success: true,
            data: otbt_01
        })

    } catch(error) {
        res.json({
            success: false,
            error: error
        })

    }
}

exports.getTaskbyID = async(req, res) => {
    try {
        const otbt_02 = await OTBT.findById(req.params.id);
        res.json({
            success: true,
            data: otbt_02
        })
    } catch(error) {
        res.json({
            success: false,
            error: error
        })
    }
}

exports.getTaskbyIDandDel = async(req, res) => {
    try {
        const todo_03 = await OTBT.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            data: todo_03
        })
    } catch(error) {
        res.json({
            success: false,
            error: error
        })
    }
}

exports.getTaskbyIDandUpdate = async(req, res) => {
    try {
        const todo_04 = await OTBT.findByIDandUpdate(req.params.id,req.body,{new: true});
        res.json({
            success: true,
            data: otbt_04
        })
    } catch(error) {
        res.json({
            success: false,
            error: error
        })
    }
}