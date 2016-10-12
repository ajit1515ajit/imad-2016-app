var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
     title:'Article One',
     heading:'Article One',
     date:'Oct 5 ,2016',
     content:`<p>
		This is for my first my first article.I am so happy to know that i am learning html and css and java script.
    </p>`
    
     },
 'article-two':{
     title:'Article Two',
     heading:'Article Two',
     date:'Oct 5 ,2016',
     content:`<p>
		This is for my Two my first article.I am so happy to know that i am learning html and css and java script.
    </p>
    `
     },
 'article-three':{
    title:'Article Three',
    heading:'Article Three',
    date:'Oct 5 ,2016',
    content:`<p>
		This is for my Three my first article.I am so happy to know that i am learning html and css and java script.
    </p>
   `
     } 
};
function createTemplate(data)
{   title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;
    var htmlTemplate=
         `
         <html>
<head>
	<title>
	${title}
	</title>
	<meta charset="utf-8" name="viewport" content="width-device-width , initial-scale=1">
	<link rel="stylesheet" href="/ui/style.css">
</head>
<body>
    <div class="container">
	<div>
	    <a href="/">HOME</a>
	</div>
	<hr>
	<h3>
		${heading}
	</h3>
	<div>
		${date}
	</div>
	<div>
        ${content}
	</div>
	</div>
</body>
</html>
`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
var names=[];
app.get('/submit-name/:name',function(req,res)){
	var name=req.params.name;

	names.push(name);

	res.send(JSON.stringfy(names);
}
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
