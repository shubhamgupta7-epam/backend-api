const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

const port = 8080;

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
})

app.get('/api',(req,res) => {
    res.status(200).json({ message: 'Hello Api!' });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});