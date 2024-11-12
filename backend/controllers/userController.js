const db = require('../db');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
    const { name, email, password, age } = req.body;

    try {
        // Check if user already exists
        const [existingUser] = await db.query("SELECT * FROM Users WHERE email = ?", [email]);
        if (existingUser.length > 0) return res.status(400).json({ message: "User already exists" });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        const [result] = await db.query("INSERT INTO Users (name, email, password, age) VALUES (?, ?, ?, ?)", [name, email, hashedPassword, age]);
        res.status(201).json({ id: result.insertId, name, email, age, status: true });
    } catch (error) {
        res.status(500).json({ message: "Database error", error });
    }
};

// Login a user
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const [user] = await db.query("SELECT * FROM Users WHERE email = ?", [email]);
        if (user.length === 0) return res.status(404).json({ message: "User not found" });

        // Check password
        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) return res.status(401).json({ message: "Invalid password" });

        // Generate JWT
        const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Include user details in the response (such as name and id)
        res.json({
            message: "Login successful",
            token,
            user: {
                id: user[0].id,
                name: user[0].name, 
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Database error", error });
    }
};


// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const [users] = await db.query("SELECT * FROM Users WHERE status = TRUE");

        const sanitizedUsers = users.map(({ password, ...user }) => user);

        res.json(sanitizedUsers);
    } catch (error) {
        res.status(500).json({ message: "Database error", error });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [user] = await db.query("SELECT * FROM Users WHERE id = ? AND status = TRUE", [id]);
        if (user.length === 0) return res.status(404).json({ message: "User not found" });
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ message: "Database error", error });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const [result] = await db.query("INSERT INTO Users (name, email, age) VALUES (?, ?, ?)", [name, email, age]);
        res.json({ id: result.insertId, name, email, age, status: true });
    } catch (error) {
        res.status(500).json({ message: "Database error", error });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const [result] = await db.query("UPDATE Users SET name = ?, email = ?, age = ? WHERE id = ? AND status = TRUE", [name, email, age, id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "User not found or already deleted" });
        res.json({ id, name, email, age });
    } catch (error) {
        res.status(500).json({ message: "Database error", error });
    }
};

// Soft delete a user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query("UPDATE Users SET status = FALSE WHERE id = ?", [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "User not found or already deleted" });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Database error", error });
    }
};
