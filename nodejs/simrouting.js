const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;      // get the path like '/' or '/about'
  const method = req.method; // get HTTP method like GET or POST

  if (url === '/' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the Home Page');
  } 
  else if (url === '/about' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the About Page');
  } 
  else if (url === '/contact' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the Contact Page');
  } 
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
