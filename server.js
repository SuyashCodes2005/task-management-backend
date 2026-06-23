const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Task Management Backend API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use(
  "/api/dashboard",
  dashboardRoutes
);
app.use("/api/analytics", analyticsRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});