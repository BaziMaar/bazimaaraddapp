const express = require('express');
const axios = require('axios');
const app = express();
const cors=require('cors')

// Enable Express to parse incoming JSON requests
app.use(cors());
app.use(express.json());

// Route to forward the order creation request
app.post('/create_order', async (req, res) => {
  try {
    // Forward the request body to the external API
    const response = await axios.post('https://api.ekqr.in/api/create_order', req.body);
    
    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Start the Express server on port 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});