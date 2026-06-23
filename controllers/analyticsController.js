const Task = require("../models/Task");

const getAnalytics = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments({
      user: req.user.id,
    });

    const completedTasks = await Task.countDocuments({
      user: req.user.id,
      status: "Completed",
    });

    const pendingTasks = await Task.countDocuments({
      user: req.user.id,
      status: "Pending",
    });

    const inProgressTasks = await Task.countDocuments({
      user: req.user.id,
      status: "In Progress",
    });

    const highPriorityTasks = await Task.countDocuments({
      user: req.user.id,
      priority: "High",
    });

    const completionRate =
      totalTasks === 0
        ? 0
        : Math.round(
            (completedTasks / totalTasks) * 100
          );

    res.status(200).json({
      success: true,
      analytics: {
        totalTasks,
        completedTasks,
        pendingTasks,
        inProgressTasks,
        highPriorityTasks,
        completionRate,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAnalytics,
};