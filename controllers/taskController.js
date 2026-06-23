const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
  try {
    const {
  title,
  description,
  status,
  dueDate,
  priority,
  category
} = req.body;

    const task = await Task.create({
  title,
  description,
  status,
  dueDate,
  priority,
  category,
  user: req.user.id
});

    res.status(201).json({
      success: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Tasks
const getTasks = async (req, res) => {
  try {
    const filter = {
      user: req.user.id,
    };

    if (req.query.status) {
      filter.status = req.query.status;
    }

    if (req.query.priority) {
      filter.priority = req.query.priority;
    }

    if (req.query.category) {
      filter.category = req.query.category;
    }

    let query = Task.find(filter);

    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }

    const tasks = await query;

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Task
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
  _id: req.params.id,
  user: req.user.id,
});

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
  {
    _id: req.params.id,
    user: req.user.id,
  },
  req.body,
  {
    new: true,
  }
);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
  _id: req.params.id,
  user: req.user.id,
});

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};