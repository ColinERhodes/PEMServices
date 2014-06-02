var mockCustomers = [
    {
        Id : '1',
        Name :'Cedars-Sinai',
        LogoURI : 'http://cedars-sinai.edu/resources/images/cedars_sinai_logo.png'
    }
];
    
var getCustomers = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, mockCustomers);
    return next();
}

var getCustomer = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, mockCustomers[0]);
    return next();
}

module.exports.getCustomers = getCustomers;
module.exports.getCustomer = getCustomer;
