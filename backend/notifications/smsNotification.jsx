const express= require("express");
const africastalking= require('africastalking');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Africas talking configuration
const At= africastalking({
    apiKey: 'atsk_5ea092859caf7c265984c9d3fd09c550650cf24fd646e10e46191869de4e2a83b84aa576',
    username: 'sandbox',
});

const sms = At.SMS;

/*app.post('/send-payment-sms', async(req, res) => {
    const userPhone= '+255733879722';
    const paymentLink= 'https://patments.com';

    try {

        await sms.send({
            to: userPhone,
            message: `Your school fee payment is due. Click this link to start the payment process: ${paymentLink}`,
        });

        res.status(200).
            send("Payment remider sms sent successfully");
    } catch(error) {

        console.error('Error sending Sms: ', error);
          res.status(500).
              send("Error sending payment reminder sms.");
    }
}); */

sms.send({
    to: '+255733879722',
    message: 'Your school fee payment is due. Click this link to start the payment process',
    from: 'magwe',
}).then(() => console.log(`Message sent successfully`))
  .catch(err => console.log(err));


//Starting the express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
