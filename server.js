const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic routes for chores API
app.get('/api/chores', (req, res) => {
    res.json({ message: 'List of chores' });
});

app.post('/api/chores', (req, res) => {
    const newChore = req.body;
    // Logic to add the new chore goes here
    res.status(201).json({ message: 'Chore created', chore: newChore });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});