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
const { dirname } = require('path');


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
  let h1 = __dirname+"/public/mp3/" + req.body.id + req.body.question+ ".mp3"
  let pythonPass1 = req.body.id + req.body.question+ ".mp3";
  let pythonPass = req.body.id + req.body.question;
  let base_dir = __dirname+"/public";
  let question_id = Number(req.body.question) + 1
  fs.rename(__dirname+'/public/uploads/' + req.file.filename, h1, function (err) {
    if (err) console.log('ERROR: ' + err);
  });

  const scriptPath1 = __dirname + "/../python"

   const options = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: scriptPath1,
        pythonPath: 'D:/home/python364x64/python.exe', //D:\home\python364x64\python.exe, C:/Users/Pranav Patel/AppData/Local/Programs/Python/Python37/python.exe
        args: [pythonPass1, base_dir]
      };
    
    
    var test = new PythonShell('speechtotextschabu.py', options)
    
    test.on('message', function(message){
        const request = new Request(
          //insert into [dbo].[Answer] (question_id, interview_id, answer_text, answer_audio) Values (3, 2, 1, '', 'ifhrwighwpghweih');   
      
          `insert into [dbo].[demo_answer] (answer_id, question_id, interview_id, answer_text, answer_audio) Values (`+question_id+`, ` +question_id+`, `+1+`, '`+ message+`','`+ pythonPass +`');`,
          (err, rowCount) => {
            if (err) {
              console.error(err.message);
            } else {
              //console.log(`${rowCount} row(s) returned`);
              console.log(rowCount)
              if(rowCount > 0 && req.body.submit == "true") res.send("Your recrding is saved into the database");
              else{ res.send(message);}
            }
          }
        )  
        connection.execSql(request);
    })
  

  


});

module.exports = router;