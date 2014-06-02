var PatientMock = [
    {
        First : 'Mary',
        Last : 'Cornett',
        FullName : 'Mary Cornett',
        DOB : '03/01/1970',
        Gender : 'F',
        MRN : '667664'
        }
    ];
    
var getPatients = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, PatientMock);
    return next();
}

var getPatient = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, PatientMock[0]);
    return next();
}

module.exports.getPatients = getPatients;
module.exports.getPatient = getPatient;
