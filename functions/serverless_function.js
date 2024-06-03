// serverless-function.js
const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post('/api/form-submit', async (req, res) => {
    console.log('Form submission received');
    const formData = req.body;

    try {
        // Process the form data
        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).send('Failed to process form submission');
    }
});

app.use('/.netlify/functions/serverless-function', router);

module.exports.handler = serverless(app);
