'use strict';


const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));
