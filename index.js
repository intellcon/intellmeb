var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.post('/', function(req, res, next) {
  //res.setHeader('Content-Type', 'text/plain');
  //res.write('you posted: \n');
  //res.end(JSON.stringify(req.body, null, 2));
  var transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "evp@intellcon.ru",
      pass: "207546Str"
    }
  });
  var messg = 'Имя: ' + req.body.name + '\nТелефон: ' + req.body.phone + '\nСообщение: ' + req.body.message;
  console.log(messg);
  var mailOptions = {
    from: 'evp@intellcon.ru',
    to: 'evp@soyd.ru',
    subject: 'Message from site',
    text: messg
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Сообщение отправлено: " + info.response);
    }
  })
}); 
app.use(express.static('views'));

app.listen(5000);
