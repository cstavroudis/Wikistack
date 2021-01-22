const express = require("express");
const morgan = require("morgan");
const app = express();
const { db, Page, User } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  });

//middleware
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Test');
} )

const PORT = 3000;

const init = async () => {
    // await db.sync({force: true});
    await Page.sync();
    await User.sync();
    // make sure that you have a PORT constant
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
  }
  
  init();

