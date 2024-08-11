var http = require('http');
var fs = require('fs');
console.log(__dirname);
function onRequest(req,res)
{
    if (req.url ==='/MKN_1.html' || req.url ==='/') 
    {
        fs.readFile('./MKN_1.html',function (error, data) 
        {
            if (error) 
            {
                res.writeHead(404);
                res.write('File Not Found');
            } 
            else 
            {
                res.writeHead(200, { "Content-Type":"text/html" });
                res.write(data);
            }
            res.end();
        });
    }

    else if (req.url === '/MKN_1ass.css') 
    {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('./MKN_1ass.css'));
        res.end();
    }

    else if(req.url === '/MKN_JS.js')
    {
        res.setHeader('Content-type', 'text/js');
        res.write(fs.readFileSync('./MKN_JS.js'));
        res.end();
    }

    else 
    {
        res.write("invalid request")
        res.end();
    }
}

http.createServer(onRequest).listen(8080);