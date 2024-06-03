export async function formSubmit(event) {
  console.log('FORM submission received');
  const request = event.request;
  const formData = await request.json();

  try {
    console.log('Form data:', formData);
    return {
      statusCode: 200,
      body: 'Form submitted successfully!',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      statusCode: 500,
      body: 'Failed to submit form',
    };
  }
}