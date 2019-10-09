const employee = require('../models/employee');
const employeeController = {};
//const { mssql } = require('../database');

employeeController.getEmployees = async(req, res) => {
    const Employee = await employee.find();
    res.json(Employee);
};

employeeController.createEmployees = async(req, res) => {
    const Employee = new employee(req.body);
    await Employee.save();
};

employeeController.editEmployees = async(req, res) => {
    const { id } = req.params;
    const Employee = {
        ID: req.body.ID,
        Name: req.body.Name,
        QTY: req.body.QTY
    };
    await employee.findByIdAndUpdate(id, { $set: Employee }, { new: true });
    res.json(employee);
};

employeeController.deleteEmployees = async(req, res) => {
    await employee.findOneAndRemove(req.params.id);
    res.json('Employe deleted');
}

employeeController.getEmployee = async(req, res) => {
    const Employee = await employee.findById(req.params.id);
    res.json(Employee);
};
module.exports = employeeController;