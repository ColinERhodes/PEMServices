var ImagingMock = [
    {
         Description :  'Cardiac Ultrasound',
         Date : '1/1/2013',
         Modality : "US",
         Provider: 'Rochester General Hospital',
         URL : 'https://iwerp-demo.ehgt.com/eunityServer/eunityViewer?studyUID=1.2.250.1.59.453.859.2960729188.3728.1274191976.2.1.1&user=TestUser&CLOAccessKeyID=UtqOAZHwVvMqJCKzVvVh&expiry=1403867873&enableRelatedStudies=true&signature=vkKqLXnbB%2fGgMsPpNqrmGfakhTM%3d',
         iPADURL : 'eunity://?host=iwerp-demo.ehgt.com&port=443&protocol=https&studyUID=1.2.250.1.59.453.859.2960729188.3728.1274191976.2.1.1&user=DemoUser&password=demo'
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
