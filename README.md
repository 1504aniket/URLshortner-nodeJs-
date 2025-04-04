URL Shortener - Node.js

This is a simple URL shortener built with Node.js and Express. It allows users to generate short URLs for long links and redirect to the original URL using the short one. The project uses MongoDB to store the URLs.

Setup Instructions:
Clone the repository and navigate to the project folder.
Install dependencies using npm install.
Start the MongoDB server.
Run the Node.js server with node server.js.


How It Works:
Users send a long URL via a POST request, and the server generates a short ID for it.
When the short URL is accessed, the server looks up the original URL and redirects the user.


Technologies Used:
Node.js
Express.js
MongoDB
ShortID for generating unique short URLs
