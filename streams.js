const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	//Solution 1
	// fs.readFile(`${__dirname}/test-file.txt`, 'utf-8', (err, data) => {
	// 	if (err) console.log(err);
	// 	res.end(data);
	// });

	//Solution 2: Streams

	// const readable = fs.createReadStream(`${__dirname}/test-file.txt`, 'utf-8');
	// readable.on('data', (chunk) => {
	// 	res.write(chunk);
	// });
	// readable.on('end', () => {
	// 	res.end();
	// });
	// readable.on('error', (err) => {
	// 	console.log(error);
	// 	res.writeHead(500, { 'Content-type': 'text/html' });
	// 	res.end('File not found');
	// });

	//Solution 3: Piping
	const readable = fs.createReadStream(`${__dirname}/test-file.txt`, 'utf-8');
	readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {});
