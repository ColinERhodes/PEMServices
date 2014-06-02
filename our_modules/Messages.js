var MessagesMock = [
    {
         Text : "A new CT Angiogram is available",
         Date : '1/1/2013',
         From : "Colin Rhodes"
        }
    ];
    
var getMessages = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, MessagesMock);

    return next();
}

var getMessage = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, MessagesMock[0]);
    return next();
}

module.exports.getMessages = getMessages;
module.exports.getMessage = getMessage;
