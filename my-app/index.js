const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assignment.html'));
});

app.post('/', async (req, res) => {
    console.log('POST request received');
    const formData = req.body;

    try {
        const response = await axios.post('https://getform.io/f/lakmwroa', formData);
        res.status(200).send('Form submitted successfully!');
    } catch (error) {
        console.error('Error submitting form to Getform:', error);
        res.status(500).send('Failed to submit form');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
