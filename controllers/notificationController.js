const Task = require("../models/Task");

const getNotifications = async (req, res) => {
  try {
    const now = new Date();

    const next7Days = new Date(
  now.getTime() + 7 * 24 * 60 * 60 * 1000
);

    const tasks = await Task.find({
  user: req.user.id,
  dueDate: {
    $gte: now,
    $lte: next7Days,
  },
  status: {
    $ne: "Completed",
  },
});

   const notifications = tasks.map((task) => ({
  task: task.title,
  message: "Task is due within 7 days",
  dueDate: task.dueDate,
}));

    res.status(200).json({
      success: true,
      count: notifications.length,
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getNotifications,
};