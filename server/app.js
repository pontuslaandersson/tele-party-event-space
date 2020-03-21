const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.listen(process.env.PORT || 5000);


app.use(cors());
app.use(bodyParser.json());



