var express = require('express');
var multer = require('multer');
var app = express();
var ffmpeg = require('ffmpeg');
var fs = require('fs')



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
  let file = req.file.filename;
  let question_counter = Number(req.body.question) + 1;
  let file_name = req.body.id +"-"+ "ans"+"-"+question_counter;
  
  fs.rename('C:/Users/Pranav Patel/Documents/schabu/back_end/routes/public/uploads/' + file, 'C:/Users/Pranav Patel/Documents/schabu/back_end/routes/public/uploads/' + req.body.id +"-"+ req.body.question+ "ans" + ".wav", function (err) {
    if (err) console.log('ERROR: ' + err);
  });

  const request = new Request(
    //insert into [dbo].[Answer] (question_id, interview_id, answer_text, answer_audio) Values (3, 2, 1, '', 'ifhrwighwpghweih');   
    //SELECT TOP (1000) * FROM [dbo].[Questionnaire] Inner Join [dbo].[Job_Questionnaire] on [dbo].[Questionnaire].question_id  = [dbo].[Job_Questionnaire].question_id where [dbo].[Job_Questionnaire].job_id = '1'; 
    `insert into [dbo].[Answer] (answer_id, question_id, interview_id, answer_text, answer_audio) Values (`+question_counter+`, ` +question_counter+`, `+1+`, '','`+ file_name +`');`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
        if(rowCount > 0) res.send("Your recrding is saved into the database");
        else{
          console.log("Not inserted")
        }
      }
    }
  )

  connection.execSql(request);


});

module.exports = router;