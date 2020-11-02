var express = require('express');
const QR = require("qrcode")
var router = express.Router();
let {PythonShell} = require('python-shell')
var nodemailer = require('nodemailer');
var hash = require('object-hash');
const { Connection, Request } = require("tedious");

const config = {
  authentication: {
    options: {
      userName: "rootweb", // update me
      password: "Pranav76+" // update me
    },
    type: "default"
  },
  server: "schabu-web-team.database.windows.net", // update me
  options: {
    database: "schabu-web-dev", //update me
    encrypt: true
  }
};
const connection = new Connection(config);
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connection Successful12!")
  }
});
let send_email;
//https://front-end-schabu.azurewebsites.net/candidate
router.get('/', function(req, res, next) {
    if(req.query.email != ""){
        let hash_email = hash(req.query.email)
        send_email = "http://localhost:9000/expire?code="+hash_email;
        let t1 = req.query.email;
        const request = new Request(
          `insert into [dbo].[Candidate] (email, hashkey, phone, createdAt) Values ('`+req.query.email+`', '`+hash_email+`', '`+req.query.phone+`', SYSDATETIME());`,
          (err, rowCount) => {
            if (err) {
              console.error(err.message);
            } else {
              console.log(`${rowCount} row(s) returned`);
              if(rowCount > 0) res.send("Success");
              else{
                console.log("Not inserted")
              }
            }
          }
        )
      
        connection.execSql(request);
      
        //or we can add this QR code as a HashMap then set a time for 2 hrs to delete that hash map;
        console.log("Done")
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pranav292cyber@gmail.com',
          pass: 'Pranav76+'
        }
      });
     
      console.log(send_email)
      var mailOptions = {
        from: 'pranav292cyber@gmail.com',
        to: req.query.email,
        subject: 'Sending Email using Node.js',
        html: "<h1>Hello</h1><br/><p>You can view your interview via the link in this mail</p><br/><a href="+send_email+" target='__blank'>"+send_email+"</a>",
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


    // pyhon code
    // const options = {
    //     mode: 'text',
    //     pythonOptions: ['-u'],
    //     scriptPath: 'C:/Users/Pranav Patel/Documents/schabu/back_end/python',
    //     pythonPath: 'C:/Users/Pranav Patel/AppData/Local/Programs/Python/Python37/python.exe',
    //     args: [req.query.firstname]
    //   };
    
    
    // var test = new PythonShell('test.py', options)
    
    // test.on('message', function(message){
    //     console.log("hi")
    //     res.send(message)
    // })

});

module.exports = router;