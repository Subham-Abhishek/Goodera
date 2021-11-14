const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

require("./db/conn");

const cors = require('cors');

app.use(cors());
app.use(express.json());

const jobController = require('./controllers/job.controller');

app.use('/',jobController);

app.listen(port, () => {
    console.log("Connections listening on port " + port);
});