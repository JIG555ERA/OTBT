const mongoose = require('mongoose');
const { boolean } = require("webidl-conversions");

const OTBTSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        default: 'Not Started',
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    priority: {
        type: String,
    },
    dueDate: {
        type: Date
    }
});

module.exports = mongoose.model("OTBT", OTBTSchema);