var fs=require("fs");
var data='';
var counter=0;
var readStream = fs.createReadStream("E:\\books\\bigdata.pdf");
readStream.setEncoding('UTF-8');
readStream.on('data',function(chunk){
data +=chunk;
counter=counter+1;
console.log(counter);
});
readStream.on('end',function(){
//console.log(data);
console.log("ended")});