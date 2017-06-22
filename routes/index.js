var express = require('express');
var router = express.Router();
var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
    var selectQuery = "SELECT productLine FROM productlines ORDER BY productLine";
    connection.query(selectQuery, (error,results)=>{
        res.render('index', { theProducts: results });
    });
});

router.get('/productline/:name', (req,res)=>{
    var name = req.params.name;
    var selectQuery = "SELECT productlines.textDescription,products.productName,products.productCode FROM productlines INNER JOIN products ON productlines.productLine = products.productLine WHERE productlines.productLine = ?";
    connection.query(selectQuery, [name],(error,results)=>{
        if (error) throw error;
        res.render('products',{
            products: results
        });
    });
});

router.get('/product/:code', (req,res)=>{
    var code = req.params.code;
    var firstQuery = "SELECT * FROM products INNER JOIN orderdetails ON orderdetails.productCode = products.productCode WHERE products.productCode = ?";
    connection.query(firstQuery,[code],(error,results)=>{
        if (error) throw error;
        var productOrders = results;
        var selectQuery = "SELECT COUNT(*) as theCount,SUM(quantityOrdered) as theQuant from orderdetails WHERE orderdetails.productCode = ? GROUP BY productCode";
        connection.query(selectQuery,[code],(error,thegoodstuff)=>{
            if (error) throw error;
            res.render('a-product',{
            info: productOrders,
            numbers: thegoodstuff
            });
        });
    });
});

router.get('/order/:number', (req,res)=>{
    var number = req.params.number;
    var selectQuery = "SELECT products.productName,customers.customerNumber,customers.customerName,customers.city,employees.firstName,employees.lastName,employees.officeCode,orders.status FROM orderdetails INNER JOIN orders ON orders.orderNumber = orderdetails.ordernumber INNER JOIN products ON products.productCode = orderdetails.productCode INNER JOIN customers ON customers.customerNumber = orders.customerNumber INNER JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber WHERE orderdetails.orderNumber = ?";
    connection.query(selectQuery, [number],(error,results)=>{
        if (error) throw error;
        res.render('order',{
            products: results
        });
        console.log(results)
    });
});

module.exports = router;
