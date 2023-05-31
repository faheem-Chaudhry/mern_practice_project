const express = require('express')
const app = express()
const dbConnect = require('./database/index');
const {PORT} = require('./config/index');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorhandling');

const port = 5000;
app.use(express.json());
app.use(router);
dbConnect();
app.use(errorHandler);


app.listen(port, () => {
  console.log(` APP listening on port ${port}`)
})