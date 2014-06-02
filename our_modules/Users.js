var mockUsers = [
    {
        UserName: 'colin_rhodes',
        First: 'Colin',
        Last: 'Rhodes',
        FullName: 'Colin Rhodes',
        PracticeName: 'Midtown Family Practice'
    }
];
    
var getUsers = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, mockUsers);
    return next();
}

var getUser = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, mockUsers[0]);
    return next();
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
