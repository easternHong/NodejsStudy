console.log("hello js");

//引入包
var http=require("http");

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

function hello(content){
	console.log(content);
}
//sFunction:函数作为参数,
//value :普通参数
function runFun(sFunction,value){
	sFunction(value);
	console.log("函数作为参数传递");
}
runFun(hello,"nihao");


//阻塞方式io
var file = require("fs");
var startTime = Date.parse(new Date());
var data =file.readFileSync("./hello.js");
// console.log("读文件内容:"+data.toString());

console.log("同步消耗时间:"+(Date.parse(new Date())-startTime));

//异步io

file.readFile("./hello.js",function(err,data){
	console.log("io出错?"+err);
})