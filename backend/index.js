const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require("node-cron");

const userRoutes = require('./routes/userRoute');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const testMessages = [
    "Test message 1",
    "Test message 2",
    "Test message 3",
    "Test message 4",
    "Test message 5",
    "Test message 6",
    "Test message 7",
    "Test message 8",
    "Test message 9",
    "Test message 10 ",
];

let currentMessage = testMessages[0];
let currentMessageIndex = 0;

cron.schedule("*/1 * * * *", () => {
    currentMessageIndex = (currentMessageIndex + 1) % testMessages.length;
    currentMessage = testMessages[currentMessageIndex];
    console.log(`Updated message: ${currentMessage}`);
});

app.get("/current-message", (req, res) => {
    res.json({ message: currentMessage, lastUpdated: new Date() });
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
