var express = require('express');
var multer = require('multer');
var app = express();
let {PythonShell} = require('python-shell')
var path = require('path')
const fs = require('fs');
app.use(express.static('public')); // for serving the HTML file

var upload = multer({ dest: __dirname + '/public/uploads/' });
var type = upload.single('upl');
var router = express.Router();

const { Connection, Request } = require("tedious");


const config = {
  authentication: {
    options: {
      userName: "sqladmin", // update me
      password: "SuperSecret!" // update me
    },
    type: "default"
  },
  server: "schabusql.database.windows.net", // update me
  options: {
    database: "schabudb", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connection Successful for recording!")
  }
});

router.post('/', type, function (req, res, next) {
  console.log(req.file.filename)
  let h1 = "C:/Users/Pranav Patel/Documents/schabu/back_end/routes/public/mp3/" + req.body.id + req.body.question+ ".mp3"
  let pythonPass = req.body.id + req.body.question+ ".mp3";
  let question_id = Number(req.body.question) + 1
  console.log(h1)
  console.log(path.isAbsolute('C:/Users/Pranav Patel/Documents/schabu/back_end/routes/public/uploads/' + req.file.filename))
  fs.rename('C:/Users/Pranav Patel/Documents/schabu/back_end/routes/public/uploads/' + req.file.filename, h1, function (err) {
    if (err) console.log('ERROR: ' + err);
    console.log("complted")
  });


   const options = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: 'C:/Users/Pranav Patel/Documents/schabu/back_end/python',
        pythonPath: 'C:/Users/Pranav Patel/AppData/Local/Programs/Python/Python37/python.exe',
        args: [pythonPass]
      };
    
    
    var test = new PythonShell('speechtotextschabu.py', options)
    
    test.on('message', function(message){
      console.log(typeof(message))
       

        const request = new Request(
          //insert into [dbo].[Answer] (question_id, interview_id, answer_text, answer_audio) Values (3, 2, 1, '', 'ifhrwighwpghweih');   
      
          `insert into [dbo].[demo_answer] (answer_id, question_id, interview_id, answer_text, answer_audio) Values (`+question_id+`, ` +question_id+`, `+1+`, '`+ message+`','`+ pythonPass +`');`,
          (err, rowCount) => {
            if (err) {
              console.error(err.message);
            } else {
              console.log(`${rowCount} row(s) returned`);
              if(rowCount > 0 && req.body.submit == "true") res.send("Your recrding is saved into the database");
              else{
                console.log("Not inserted")
              }
            }
          }
        )
      
        connection.execSql(request);

    })
  

  


});

module.exports = router;