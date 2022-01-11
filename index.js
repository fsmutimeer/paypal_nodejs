const express = require('express');
require('dotenv').config();



var paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AaoUzaeU5Oe3dGK3kgWTZKwyg7crt_SOBw_tXmMCuI-bnVwB5EPcUFZull0k4Mrqo3ERnl_mImF6TbYQ',
    'client_secret': 'EBWvgToJ_AUoRrHOE_UvuuL0KF-jbZRdgLX_eY-zVq3KC4LVrbBhqsalBX-OGhk2k7m2brY3HgvDKoz2'
});


const port = process.env.PORT || 7000;
const api = process.env.api

const app = express();
app.use(express.json())
app.get('/', (req, res, next) => {
    res.json('node server is running')
});

// app.use(`${api}/customer`, customerRoute);
app.post('/payment', (req, res) => {
    paypal.payment.create(req.body, function(error, billingPlan) {
        if (error) {
            console.log(error);
            res.status(400).json(error)
        } else {
            res.send(billingPlan)
        }
    });
})


app.listen(port, () => console.log(`stripe server is running at http://localhost:${port}`))