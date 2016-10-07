var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 var articleOne={
     title:'Article One',
     heading:'Article One',
     date:'Oct 5 ,2016',
     content:`<p>
		This is for my first my first article.I am so happy to know that i am learning html and css and java script.
    </p>
    <p>
		This is for my first my first article.I am so happy to know that i am learning html and css and java script.
    </p>
    <p>
		This is for my first my first article.I am so happy to know that i am learning html and css and java script.
    </p>`
     };
    function createTemplate(data)
{   title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;
    var htmlTemplate=
         `<html>
<head>
	<title>${title}
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
app.get('/article-one', function (req, res) {
  res.send(createTemplate('articleOne'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'two.html'));
});
app.get('/article-third', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'third.html'));
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
