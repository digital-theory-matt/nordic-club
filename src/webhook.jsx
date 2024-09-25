const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your-secret-key');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const event = req.body;

  // Handle customer updated event
  if (event.type === 'customer.updated') {
    const customer = event.data.object;

    // Check if the doorCode metadata has been updated
    if (customer.metadata.doorCode) {
      console.log(`New door code for customer ${customer.id}: ${customer.metadata.doorCode}`);
      // Handle the new door code (e.g., update your database or notify someone)
    }
  }

  res.status(200).send('Received');
});

app.listen(3000, () => console.log('Webhook server is running.'));
