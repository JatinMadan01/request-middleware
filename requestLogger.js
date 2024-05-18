// requestLogger.js
const fs = require('fs');
const path = require('path');

const requestLogger = (req, res, next) => {
  const start = Date.now();
  const { method, url, ip } = req;
  const timestamp = new Date().toISOString();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const logMessage = `[${timestamp}] ${method} ${url} - ${ip} - ${res.statusCode} - ${duration}ms\n`;

    // Log to the console
    console.log(logMessage);

    // Append log to a file
    fs.appendFileSync(path.join(__dirname, 'requests.log'), logMessage);
  });

  next();
};

module.exports = requestLogger;
