var express = require('express');
var router = express.Router();
const controllers = require('../controllers/index');


// Get Tasks
router.get("/api/tasks/:quantity", (req, res) => controllers.api.getTasks(req, res));

// Update Task
router.put("/api/task/:task_id", (req, res) => controllers.api.updateTask(req, res));

// Health Check
router.get("/api/health", (req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date()
      }
    
      return res.status(200).send(data);
});




module.exports = router;
