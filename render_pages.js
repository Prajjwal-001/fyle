const fs = require('fs');
const axios = require('axios');
const path = require('path');

const pages = [
  { url: 'http://localhost:3000/', filename: 'Fyle Assignment Form Submission.html' },
  { url: 'http://localhost:3000/', filename: 'Fyle Assignment initial Page.html' },
];

(async () => {
  for (const page of pages) {
    try {
      const response = await axios.get(page.url);
      fs.writeFileSync(path.join(__dirname, 'public', page.filename), response.data);
      console.log(`Saved ${page.filename}`);
    } catch (error) {
      console.error(`Error saving ${page.filename}:`, error);
    }
  }
})();
