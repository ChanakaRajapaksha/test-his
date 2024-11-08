import fetch from 'node-fetch';

// URL endpoint to fetch data from every 2 minutes
const endpoint = 'https://my-json-server.typicode.com/typicode/demo/db';

// Function to log data from the endpoint every 2 minutes
setInterval(async () => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log('Response from endpoint:', data);
    } catch (error) {
        console.error('Failed to fetch from endpoint:', error);
    }
}, 60000); // 120000 ms = 2 minutes
