// db.js
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Check if the connection is successful
(async () => {
    try {
        const connection = await pool.promise().getConnection();
        console.log("Database connected successfully");
        connection.release(); 
    } catch (error) {
        console.error("Database connection failed:", error);
    }
})();

module.exports = pool.promise();
