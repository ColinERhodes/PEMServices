//
//  A simple restify web api
//
var http = require('http');
var path = require('path');
var restify= require('restify');
var mongojs = require('mongojs');

var customers = require('./our_modules/Customers.js');
var departments = require('./our_modules/Departments.js');
var users = require('./our_modules/Users.js');
var patients = require('./our_modules/Patients.js');
var records = require('./our_modules/Records.js');
var images = require('./our_modules/Imaging.js');
var messages = require('./our_modules/Messages.js');
var appointments = require('./our_modules/Appointments.js');

var server = restify.createServer({
    name : "ReferralAPI"
});
 
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

var PATH='/api';

server.get({path:PATH + '/Users', version : '0.0.1'}, users.getUsers);
server.get({path:PATH + '/Users/:UserName', version : '0.0.1'}, users.getUser);


server.get({path:PATH + '/Customers/:CustomerName/Departments', version : '0.0.1'}, departments.getDepartments);
server.get({path:PATH + '/Customers/:CustomerName/Departments/:DepartmentName', version : '0.0.1'}, departments.getDepartment);

server.get({path:PATH + '/Customers/:CustomerName/Patients', version : '0.0.1'}, patients.getPatients);
server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName', version : '0.0.1'}, patients.getPatient);

server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName/Records', version : '0.0.1'}, records.getRecords);
server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName/Records/:RecordId/Document', version : '0.0.1'}, records.getDocument);

server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName/Messages', version : '0.0.1'}, messages.getMessages);
server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName/Messages/:MessageId/Message', version : '0.0.1'}, messages.getMessages);


server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName/Images', version : '0.0.1'}, images.getImaging);
server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName/Images/:ImageId/Image', version : '0.0.1'}, images.getImage);

server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName/Appointments', version : '0.0.1'}, appointments.getAppointments);
server.get({path:PATH + '/Customers/:CustomerName/Patients/:PatientName/Images/:AppointmentId/Appointments', version : '0.0.1'}, appointments.getAppointment);

server.get({path:PATH + '/Customers', version : '0.0.1'}, customers.getCustomers);
server.get({path:PATH + '/Customers/:CustomerName', version : '0.0.1'}, customers.getCustomer);

server.listen(process.env.PORT ,process.env.IP, function(){
    console.log('%s listening at %s ', server.name , server.url);
});

