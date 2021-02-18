var express = require('express');
var app = express();
var sql = require('mysql');
var bodyParser = require('body-parser');//body parser used for body in the postman
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:"true"}))
var con = sql.createConnection({   
    user:"root",
    password:"root",
    host:"localhost",
    database:"test"
});
app.get('/', function (req, res) {
   // connect to your database
    con.connect(function (err) {
    
        if (err) console.log(err);

        // create Request object           
        // query to the database and get the records
        con.query('select * from student2', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});
app.get('/:id', function (req, res) {
    // connect to your database
    //let found=item.id; 
    
     con.connect(function (err) {
         // create Request object           
         // query to the database and get the records
         con.query(`select *  from student2 where student_id='${req.params.id}'`, function (err, recordset) {
             
             if (err) console.log(err)
 
             // send records as a response
             res.send(recordset);
             
         });
     });
 });
 app.post('/', function (req, res) {
    // create an object of new Item
    console.log('req ',req.body);
    //let sqlQuery = "insert into emp (sapp.post('/', function (req, res) {
        // create an object of new Item
        //console.log('req ',req.body);
        let sqlQuery = "insert into student2 (student_name,student_city) values('"+req.body.student_name+"','"+req.body.student_city+"')";
        console.log('sqlQuery => ',sqlQuery)
        con.query(sqlQuery,function(err,result){
          res.send(result);
        
           
      });
      console.log("success");
    });
    //put or update operation
    app.put('/:id',function(req,res){
        
           con.query('UPDATE `student2` SET `student_name`=?,`student_city`=? where `student_id`=?', [req.body.student_name,req.body.student_city,req.body.student_id], function (error, results) {
            if (error) throw error;
            res.send(JSON.stringify(results));
           });
          });
      
       
        //delete operation

        app.delete('/:id',function(req,res){ 
            let id = parseInt(req.params.id);
            console.log(id);
             var t=con.query ("delete from student2 where student_id="+id+" ",function(err,res1){
                console.log(t);
                if (err) throw err;
                res.send(res1);
                
            });
        })

      
           

   
      
var server = app.listen(5000, function () {
    console.log('Server is running..');
})