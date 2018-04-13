var http = require('http');
var url = require('url');
var _date = require('./Module/Time');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("date time currently: " + _date.getDate());
    var q = url.parse(req.url,true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8000);