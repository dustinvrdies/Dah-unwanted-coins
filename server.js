
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// SQLite Database
const db = new sqlite3.Database(':memory:');

// Setup DB schema
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT, points INTEGER DEFAULT 0)");
    db.run("CREATE TABLE donations (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, amount TEXT, date TEXT)");
    db.run("CREATE TABLE referrals (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, referred_email TEXT)");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('Dustin's Coin Salvage Live!'));
app.listen(port, () => console.log(`Server running on port ${port}`));
