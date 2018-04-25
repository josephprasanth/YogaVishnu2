var fs = require('fs');
fs.writeFile(__dirname+'/index.html','<h1>testing2</h1>', function (error) {
    if (error) {
        return console.log(error);        
    }    
    else {
       return console.log('success');        
    }    
})

var https = require('https');
var linka = 'https://ibb.co/feO3Yc';

https.get(linka, function (response) {
   response.pipe(fs.createWriteStream(__dirname+'/landskape.jpg'));
    
});
