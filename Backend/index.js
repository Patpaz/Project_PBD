var express = require('express');
var app = express();

var mysql = require('mysql');
var cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/hi', hello_world);
function hello_world(req, res){
    res.send("Hello World, this is my API");
}

app.get('/project', function(req, res){
    // Step 0: Definir la conexion a la BD
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'project'
    });
    
    connection.connect();
  
    var myQuery = " SELECT product_id, name, stock, price, category, description, created_date, modified_date " +
                  " FROM product " + 
                  " WHERE 1 = 1 ";
    var myValues = [];
  
    if(req.query.price_ht){
      myQuery += " AND price > ? ";
      myValues.push(req.query.price_ht);
    }
  
    if(req.query.price_lt){
      myQuery += " AND price < ? ";
      myValues.push(req.query.price_lt);
    }
  
    if(req.query.category){
      myQuery += " AND UPPER(category) = UPPER(?) ";
      myValues.push(req.query.category);
    }
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      
      res.send(results);
  
      connection.end();
    });
});

app.post('/project', function(req, res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'project'
    });
    
    connection.connect();

    var myQuery =   " INSERT INTO product (name, stock, price, category, description, created_date, modified_date ) " +
                    " VALUES (?, ?, ?, ?, ?, NOW(), NOW()); ";
    
    var myValues = [req.body.name, req.body.stock, req.body.price, req.body.category, req.body.description ];

    connection.query(myQuery, myValues, function(error, results, fields){

        if (error) throw error;

        res.send(results);

        connection.end();
    });
});

app.delete('/project/:product_id', function(req, res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'project'
      });

      connection.connect();

      var myQuery = " DELETE FROM product " +
                    " WHERE product_id = ?; ";

      var myValues = [ req.params.product_id ];

      connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;

        res.send(results);

        connection.end();
      });

});

app.put('/project/:product_id', function(req, res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'project'
    });
        
    connection.connect();
  
    var myQuery = " UPDATE product SET modified_date = NOW() ";  //if error, product must be changed by 'project'
    var myValues = [ ];
    
    if (req.body.name){
      myQuery += " , name = ? ";
      myValues.push(req.body.name);
    }
  
    if (req.body.stock){
      myQuery += " , stock = ? ";
      myValues.push(req.body.stock);
    }
  
    if (req.body.price){
      myQuery += " , price = ? ";
      myValues.push(req.body.price);
    }
  
    if (req.body.category){
      myQuery += " , category = ? ";
      myValues.push(req.body.category);
    }
  
    if (req.body.description){
      myQuery += " , description = ? ";
      myValues.push(req.body.description);
    }
  
    myQuery += " WHERE product_id = ? "
    myValues.push(req.params.product_id);
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      
      res.send(results);
  
    connection.end();
    });
});

app.get('/project/:product_id', function(req, res){
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'project'
    });
  
    connection.connect();
  
    var myQuery = " SELECT product_id, name, stock, price, category, description, created_date, modified_date " +
                  " FROM product " +
                  " WHERE product_id = ? ";
    var myValues = [req.params.product_id];
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;

      res.send(results[0]);

      connection.end();
    });
  });

  
app.listen(3000);
