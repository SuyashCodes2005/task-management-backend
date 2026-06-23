const Task = require("../models/Task");

const getDashboardStats = async (req, res) => {
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

    res.status(200).json({
      success: true,
      stats: {
        totalTasks,
        completedTasks,
        pendingTasks,
        inProgressTasks,
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
  getDashboardStats,
};