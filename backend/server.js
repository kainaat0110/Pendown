const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({ extended: false }));

// Routes
app.use('/api/profile', require('./Routes/profileRoutes'));
app.use('/api/stories', require('./Routes/storyRoutes'));
app.use('/api/questions', require('./Routes/questionRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
