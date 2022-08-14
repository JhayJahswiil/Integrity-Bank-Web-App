const fs = require("fs");
const http = require('http');
http.createServer(function(req, res){
    if (req.url == '/'){
        fs.readFile('./index.html', "utf-8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.writeHead(200, {'Content-type' : 'text/css'});
            let fileContents = fs.readFile('./css/style.css', {encoding: 'utf8'});
            res.write(fileContents);
            res.end()
        })
    }else if (req.url == '/register'){
        fs.readFile('./register.html', "utf-8", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }
}).listen(5000)