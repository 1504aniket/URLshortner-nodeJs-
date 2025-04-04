const express = require('express');
const path = require('path');  // Import path module
const app = express();
const PORT = 3000;
const Url = require('./models/url'); // Capitalize model name (convention)
const shortid = require('shortid');
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.json());

// Serve the form.html file when home page is requested
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Create a Short URL
app.post('/url', async (req, res) => {
    try {
        const { redirecturl } = req.body; // Destructure redirecturl

        if (!redirecturl) {
            return res.status(400).json({ error: "URL not found" });
        }

        const id = shortid.generate(); // Generate short ID

        const newUrl = new Url({
            shortid: id,
            redirecturl
        });

        const savedUrl = await newUrl.save();
        console.log('Data saved');
        res.json(savedUrl);

    } catch (err) {
        console.error("Error saving URL:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Redirect Short URL to Original
app.get('/url/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Url.findOne({ shortid: id });

        if (!data) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        res.redirect(data.redirecturl);
    } catch (err) {
        console.error("Error fetching URL:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
