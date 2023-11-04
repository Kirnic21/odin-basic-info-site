const http = require('http');
const fs = require('fs');
const url = require('node:url');
const myURL = new URL('https://example.org/abc/xyz?123');


  http.createServer(function (req, res) {
    console.log(url.parse(req.url).pathname)
    if(url.parse(req.url).pathname === "/about")
    {
      fs.readFile('./about.html', function(error,html){
        if(error) throw error;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html);
      
      res.end();
    })
    }
    else if(url.parse(req.url).pathname === "/")
    {
    fs.readFile('./index.html', function(error,html){
      if(error) throw error;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
 
    res.end();
  })}
  
  else if(url.parse(req.url).pathname === "/contact-me")
    {
    fs.readFile('./contact-me.html', function(error,html){
      if(error) throw error;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
 
    res.end();
  })}
  else{
    fs.readFile('./404.html', function(error,html){
      if(error) throw error;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
 
    res.end();
  })}
}

).listen(8080);


