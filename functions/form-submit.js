exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        const formData = JSON.parse(event.body);

        console.log('Form data received:', formData);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Form submitted successfully!' }),
        };
    } catch (error) {
        console.error('Error processing form submission:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to submit form' }),
        };
    }
};
