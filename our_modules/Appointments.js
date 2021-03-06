var mockAppointments = [
    {
        Location : 'Memorial Hospital',
        Date :'01/01/2013',
        Time: '8:20pm',
        Provider : 'Dr Hunt'
    },
       {
        Location : 'Rochester Breast Imaging',
        Date :'08/03/2013',
        Time: '10:20pm',
        Provider : 'Dr Aneglotti'
    } ,
       {
        Location : 'Rochester General Hospital',
        Date :'01/04/2013',
        Time: '10:00am',
        Provider : 'Dr Hart'
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
