const http = require('http');

const todos = [
  { id: 1, text: 'todo 1' },
  { id: 2, text: 'todo 2' },
  { id: 3, text: 'todo 3' },
];

const server = http.createServer((req, res) => {
  // 1 way to set headers
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'application/json');
  //   res.setHeader('X-Powerd-By', 'Node.js');

  // 2 way to set headers
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  //   console.log(req.headers.authorization);
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      console.log(body);
      const data = Buffer.concat(body).toString();
      console.log(data);
    });

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
