
const http = require('http');

http
	.createServer((req, res) => {
		res.writeHead(200, {'Content-type': 'text/html'});
		res.end('<html><h1>Hello NodeJS</h1>'+
		'<p> It\'s really easy to create server in nodejs.'+
		'</html>');
	})
	.listen(3000, () => console.log('Simple http server using node.'));