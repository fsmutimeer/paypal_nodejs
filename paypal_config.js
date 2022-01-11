var paypal = require('paypal-rest-sdk');
require('dotenv').config();

const pay = paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET
});
module.exports = pay;