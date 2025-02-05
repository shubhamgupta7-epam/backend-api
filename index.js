const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

const port = 8080;

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
})

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});