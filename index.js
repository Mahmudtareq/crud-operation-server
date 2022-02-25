const express = require('express');
const mysql = require("mysql");
const cors = require('cors');

const app = express();
app.use(express.json());
// database connection 
const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "orangetoole"
    }
);

app.get("/", (req, res) => {
    res.send('hello world')
})
// check database connection
db.connect(function (error) {
    if (error) throw error;
    console.log('database connected');
    // db.query("select * from  userlist ", function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
        
    // })
})

app.listen(4000, () => {
    console.log('running port 4000')
});