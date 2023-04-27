import Task from "../models/tasks.js";
import ErrorHandler from "../utils/errorHandler.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Please Complete All The Fields",
      });
    }

    const task = await Task.create({ title, description, user: req.user });

    return res.status(201).json({
      success: true,
      message: "Task Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllMyTasks = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ user: userId });

    return res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return next(new ErrorHandler("Invalid Id", 400));
    }

    task.isCompleted = !task.isCompleted;
    await task.save();
    return res.status(200).json({
      success: true,
      message: "Task Updated",
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return next(new ErrorHandler("Got Invalid Id", 400));
    }

    await task.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Task Deleted",
    });
  } catch (error) {
    next(error);
  }
};
