import express from "express";
import path from "path";

const app = express();

// Serve static files
app.use(express.static("Webpages"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "Webpages", "landing_page.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(process.cwd(), "Webpages", "about_page.html"));
});

app.get("/explore", (req, res) => {
  res.sendFile(path.join(process.cwd(), "Webpages", "explore.html"));
});


app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(process.cwd(), "Webpages", "dashboard.html"));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
