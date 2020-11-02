var express = require('express');
var router = express.Router();


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
    console.log("Connection Successful!")
  }
});


router.get('/', function(req, res, next){
    const code = req.query.code;
    
    const request = new Request(
        `select DATEDIFF(hour, createdAt, SYSDATETIME()) AS DateDiff from [dbo].[Candidate] where hashkey = '`+code+`';`,
        (err) => {
          if (err) {
            console.error(err.message);
          } 
        }
      )

      request.on("row", columns => {
        columns.forEach(column => {
         if(column.value < 2){ //this will tell the validation is for 2 hours
             res.redirect("http://localhost:3000/welcome")
         }else{
             res.redirect("http://localhost:3000/invalidurllink")
         } 
        });
      });
    
      connection.execSql(request);
    
})

module.exports = router;
//https://front-end-schabu.azurewebsites.net/invalidurllink