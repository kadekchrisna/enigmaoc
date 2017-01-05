var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = mysql.createConnection({
	host: 'localhost',
	user:'root',
	password:'',
	database:'db'
});

connection.connect(function(error){
	if(error){
		console.log('error');

	}
	else{
		console.log('connect ke database');
	}
});

var transaction = new sql.Transaction(connection.connect(function(error){
	if(error){
		console.log('error');

	}
	else{
		console.log('connect ke database');
	}
}));
$nama = $_POST['name'];

transaction.begin(function(err) {
    

    var request = new sql.Request(transaction);
    request.query('insert into tabel (nama) values ($nama)', function(err, recordset) {
        if(error){
		console.log('error');

		}
		else{
			console.log('connect ke database');
		}
	 
        transaction.commit(function(err, recordset) {
        if(error){
		console.log('error');

		}
		else{
			console.log('connect ke database');
		}
 
            console.log("Transaction committed.");
        });
    });
});