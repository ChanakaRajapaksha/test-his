import os from 'os';

// Function to log system status every 2 minutes
setInterval(() => {
    const freeMemory = os.freemem();
    const totalMemory = os.totalmem();
    const memoryUsage = ((totalMemory - freeMemory) / totalMemory) * 100;

    console.log(`System status: Free Memory: ${freeMemory} bytes, Total Memory: ${totalMemory} bytes, Memory Usage: ${memoryUsage.toFixed(2)}%`);
}, 120000); 
