console.log("HI");

var http = require("http");
//console.log(http);

var fs =  require('fs');

var request =  require('request');

http.createServer(function (req, res){ //create Server
    res.end("welcome to my server"); //end Response
    /*
    var content= '';
    fs.readFile("./demo.html",function(err,file){
       content = file; 
       res.end(content);
    });*/
    /*  //延遲5秒
    setTimeout(function() { }, 5000);
    */
    /*
   
    var content='';
    request("http://www.csie.isu.edu.tw/upload/80203/index.html", function (error, response, body) {
        content+= body;
        res.end(content);
    });

    */
}).listen(3000);  //set Port 3000 
