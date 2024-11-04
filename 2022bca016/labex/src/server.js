const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://digvijaysinghtomar547:yourPasswordHere@mongoatlas.cwtoq.mongodb.net/?retryWrites=true&w=majority&appName=MongoAtlas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/userRoutes'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
