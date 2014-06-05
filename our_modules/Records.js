var RecordsMock = [
    {
         Description :  'Clinical Summary',
         Date : '1/1/2013',
         Provider : 'Dr Hart',
         URL : '../../PDFs/Sample_Clinical_Summary.pdf', 
         isNew : false
        },
            {
         Description :  'Cardiology note',
         Date : '1/1/2012',
         Provider : "Memorial Hospital",
         URL : '../../PDFs/cardionote.pdf', 
         isNew : true
        },
            {
         Description :  'Radiology Report',
         Date : '1/1/2011',
         Provider : "Dr Angelotti",
         URL : '../../PDFs/sample-radiology-report.pdf', 
         isNew : false
        }
    ];
    
var getRecords = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, RecordsMock);

    return next();
}

var getDocument = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, { 
        CustomerName: 'Rhodes',
        RequestName : req.params.CustomerName
        });
    return next();
}

module.exports.getRecords = getRecords;
module.exports.getDocument = getDocument;
