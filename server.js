
const http = require("http");
const fs = require("fs");
const url = require("url");
const httpServer = http.createServer(function(req,res) {
		fs.readFile(__dirname+req.url, function(err, data) {  
		  	if (err) {
	            res.writeHead(404, 'Not Found');
	            res.write('404: File Not Found!');
	            return res.end();
	        }      
	        res.statusCode = 200;
	        return res.end(data);
	    });
});
httpServer.listen(3020);

