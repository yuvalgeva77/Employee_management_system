const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstname: {type:String},
    lastname: {type:String},
    email: {type:String, required:true},
    status: {type:Schema.Types.ObjectId, ref:'status'}
});

const statusSchema = new Schema({
    name: {type:String, required:true}
});

const Employees = mongoose.model('employees', employeeSchema, 'employees');
const Status = mongoose.model('status', statusSchema, 'status');
const mySchemas = {'Employees':Employees, 'Status':Status};

module.exports = mySchemas;