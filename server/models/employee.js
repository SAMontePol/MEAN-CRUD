const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    ID: { type: String, required: true },
    Name: { type: String, required: true },
    QTY: { type: String, required: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);