const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const cors = require('cors');
const taskRoutes = require('./routes/OTBTRoutes');

const app = express();
app.use(bodyparser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/ToDo").then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.log(error)
});

// Routes
app.use('/api/tasks', taskRoutes);

app.listen(process.env.PORT1, () => {
    console.log(`Server running on port ${process.env.PORT1}`);
});
