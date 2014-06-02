
var getDepartments = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, { CustomerName: 'Rhodes'});
    return next();
}

var getDepartment = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, { 
        CustomerName: 'Rhodes',
        RequestName : req.params.CustomerName
        });
    return next();
}

module.exports.getDepartments = getDepartments;
module.exports.getDepartment = getDepartment;
