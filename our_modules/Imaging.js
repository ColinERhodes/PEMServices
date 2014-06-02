var ImagingMock = [
    {
         Description :  'Cardiac Angiogram',
         Date : '1/1/2013',
         Modality : "CT",
         URL : 'https://iwerp-demo.ehgt.com/eunityServer/eunityViewer?studyUID=1.2.250.1.59.453.859.2960729188.3728.1274191976.2.1.1&user=TestUser&CLOAccessKeyID=UtqOAZHwVvMqJCKzVvVh&expiry=1402328733&enableRelatedStudies=true&signature=mocrKyKv3q%2f9FPtNs4qLJ5KkvhY%3d'
        }
    ];
    
var getImaging = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, ImagingMock);

    return next();
}

var getImage = function(req,res,next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(200, ImagingMock[0]);
    return next();
}

module.exports.getImaging = getImaging;
module.exports.getImage = getImage;
