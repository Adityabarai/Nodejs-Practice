const http = require("http");
http
	.createServer((req, resp) => {
		resp.write("<h1>Hii, Aditya Barai</h1>");
		resp.end("Hello, Aditya Barai");
	})
	.listen(3000);
http
	.createServer((req, resp) => {
		resp.write("<h1>Hii, Aadi</h1>");
		//resp.end("Hello, Aadi")
	})
	.listen(4000);
