//const mysql = require('mysql');
const express = require('express');
var bodyParser = require("body-parser");
const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

const app = express()

 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
    //, port: 8080
  });
 app.use(express.json())
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json())
 //connection.connect();
 app.get('/',(req, res) => {
     res.send('Hello World!!!')
 })

 

 
 //PORT
const port = process.env.PORT || 3000
 app.listen(port, () => console.log('Listening on port ',port,'...'))

  connection.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
  });

  app.get('/get' , (req, res) => {
    connection.query('SELECT * FROM restaurant', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

    app.get('/get/:id' , (req, res) => {
       connection.query('SELECT * FROM restaurant WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
        })
        } );