import React, { useState, useEffect } from "react";
import axios from "axios";

const SettingsPage = () => {
    const [message, setMessage] = useState("Loading...");
    const [lastUpdated, setLastUpdated] = useState(null);

    const fetchMessage = async () => {
        try {
            const response = await axios.get("http://localhost:5000/current-message");
            setMessage(response.data.message);
            setLastUpdated(new Date(response.data.lastUpdated));
        } catch (error) {
            console.error("Error fetching message:", error);
        }
    };

    useEffect(() => {
        fetchMessage();

        const intervalId = setInterval(fetchMessage, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Settings Page</h1>

            <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
                <h2 className="text-lg font-medium">Test Message (Updates Every Minute)</h2>
                <p className="text-xl mt-2">{message}</p>
                <p className="text-sm text-gray-500">
                    Last updated at: {lastUpdated ? lastUpdated.toLocaleTimeString() : "Loading..."}
                </p>
            </div>
        </div>
    );
};

export default SettingsPage;
