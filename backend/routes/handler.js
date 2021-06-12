const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/employees',async (req, res) => {
    const employees = Schemas.Employees;
    const statuses = Schemas.Status;

    const Employeesstatuses = await employees.find({}).populate("status").exec((err, statustData) => {
        if (err) throw err;
        if (statustData) {
            res.end(JSON.stringify(statustData));
        } else {
            res.end();
        }
    });
});

router.get('/addEmployee', async (req, res) => {
    const employees = Schemas.Employees;
    const userstatus = await employees.findOne({firstname:'Yuval'}).exec();
    const Employee = {
        firstname: 'Sensei', 
        lastname: ' Johnny',
        email:'Sensei@gmail.com',
        status: userstatus.id
    };
    const newEmployee = new Schemas.Employees(Employee);
    try {
        await newEmployee.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
});

module.exports = router;