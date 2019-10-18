const express = require('express');
const logger = require('morgan');

// Define port for app to listen on
const port =  process.env.PORT || 8080;

/* ==================================================== */
/* ===== Section 2: Configure express middlewares ===== */
/* ==================================================== */

const app =  express();

/* ==================================== */
/* ===== Section 3: Making Routes ===== */
/* ==================================== */

// set routes
require('./routes')(app) //importing route
// app.get('/', (req, res) => {
//     res.render('index.html');
// });

// To make the server live
app.listen(port, () => {
    console.log(`App is live on port ${port}`);
});