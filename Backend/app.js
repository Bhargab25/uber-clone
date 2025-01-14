const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cookeParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

connectToDb();

app.use(cors());
app.use(cookeParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
