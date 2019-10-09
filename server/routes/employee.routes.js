const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');

router.get('/', employee.getEmployees);
router.post('/', employee.createEmployees);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployees);
router.delete('/:id', employee.deleteEmployees);

module.exports = router;