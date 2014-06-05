var mockAppointments = [
    {
        Location : 'Memorial',
        Date :'01/01/2013',
        Time: '8:20pm',
        Provider : 'Dr Hunt'
    }
];
    
var getAppointments = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, mockAppointments);
    return next();
}

var getAppointment = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, mockAppointments[0]);
    return next();
}

module.exports.getAppointments = getAppointments;
module.exports.getAppointment = getAppointment;
