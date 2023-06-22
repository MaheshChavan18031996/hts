const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const { Signin, Signup } = require('./sign');
var axios = require('axios');
const sequelize = require('./sequelize');


app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mahesh@1996',
  database: 'node-mysql-registration-login-api'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});


app.post('/api/Signup', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const result =  connection.execute(
      `INSERT INTO Signup (first_name, last_name, email, password ) VALUES ('${first_name}', '${last_name}', '${email}', '${password}' );`
    );
    res.json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/Signin', (req, res) => {
  try {
    const { email, password } = req.body;

    const result =  connection.execute(
      `INSERT INTO Signin (email, password ) VALUES ( '${email}', '${password}' );`
    );
    res.json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
