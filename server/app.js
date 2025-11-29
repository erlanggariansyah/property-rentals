// server/app.js
const express = require('express');
const cors = require('cors');
const http = require('http');
const noteRoutes = require('./routers/noteRoutes');

const app = express();
const server = http.createServer(app);

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, HTTP authentication) cross-origin
    optionsSuccessStatus: 204, // Respond with a 204 status for preflight requests
};

// Middleware
app.use(express.json());

//use cors
app.use(cors(corsOptions))

// Routes
app.use('/api/notes', noteRoutes);

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
