const TaskModel = require('../models/task.model');
const NameModel = require('../models/name.model');
const logger    = require('../utils/logger');

module.exports = class Services {

    setTasks = async (tasks) => {
        logger.info("Saving task")
        
        const savedTasks = await TaskModel.insertMany(tasks);
        return savedTasks;
    }

    updateState = async (task_id, status) => {
        logger.info("Updating task")

        const taskToUpdate = await TaskModel.findOne()
        .where("task_id").in([task_id])
        .exec();
        taskToUpdate.status = status;
        const updatedTask = await taskToUpdate.save();
        return updatedTask;

    }

    getNames = async (quantity) => {
        logger.info("Getting names")

        const names = await NameModel.find({}, null, {limit: parseInt(quantity)}).exec();
        return names;
    }

    setNames = async (names) => {
        logger.info("Saving names", names)

        const savedNames = await NameModel.insertMany(names);
        return savedNames;
    }
}
