var express=require('express');
var app=express();

app.use('/js', express.static(__dirname+'/js'));
app.use('/content', express.static(__dirname+'/content'));

app.get('/',function(req,res)
{
  res.sendFile(__dirname + '/index.html');
});

var server=app.listen(3000,function() {});
console.log('Server started on port 3000');
