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
    const statuses = Schemas.Status;

    const status = await statuses.findOne({name:'Working'}).exec();
    const Employee = {
        firstname: 'Sensei2', 
        lastname: ' Johnny',
        email:'Sensei@gmail.com',
        status: status._id
    
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

router.post('/addEmployee', async (req, res) => {
    const employeeFirstnamea = req.body.firstname;
    const employeeLastnamea = req.body.lastname;
    const employeeEmail = req.body.email;
    const user = Schemas.Employees;
    const statuses = Schemas.Status;
    const status = await statuses.findOne({name:'Working'}).exec();

    const newEmployee = new Schemas.Employees({
        firstname: employeeFirstnamea, 
        lastname: employeeLastnamea,
        email:employeeEmail,
        status: status._id
    });

    try {
        await newEmployee.save( (err, newEmployeeResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/employees');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/employees');
        res.end();
    }
});

module.exports = router;