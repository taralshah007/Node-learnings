It's really easy to create an http server using nodejs.
In this example, I am just trying to show how we can create a server in nodejs.

Basically, Nodejs comes with useful libraries. One of many useful libraries is http.

```
const http = require('http');
```

Note that I am using const here as my aim is to use es6 syntax as well.

Now, you need to create a server. You can do it by following line
```
http.createServer(function (req, res){

})

or

//in es6

http.createServer((req, res) => {

})
```
req and res are two arguments which represents http request and http response objects respectively. If you have already worked in web applications, you can easily understand what are these two objects.

Now, once you create a server, It needs to run on specific port. You can decide which port you want to run your server. Generally, developers prefer 8080 or 3000. 

```
listen(PORT_NUMBER, callback);
``` 

As you have created a new server, and listening to it, you need to serve incoming requests as well. req represents incoming requests. You need to process these incoming requests and send appropriate response. While sending response, you need to send response code, response headers and response body. Http response code determines how server reacted to particular request. There are various http response codes. Kindly google it for further reading. For now, we are going to send response code as 200.

You need to write response headers as well. For this example, we are going to write content-type header as 'txt/html'.

```
res.writeHead('content-type','text-html')
``` 

Now, you need to send response body also. You can do this by using end method.

```
res.end(data, encoding, callback);
```

Go to command prompt and run following command
```
node HelloNode
```

