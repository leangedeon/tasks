var express       = require('express');
var router        = express.Router();
var bodyParser    = require('body-parser')
var jsonParser    = bodyParser.json()
const controllers = require('../controllers/index');


// Get Tasks
router.get("/api/tasks/:quantity", (req, res, next) => controllers.api.getTasks(req, res, next));

// Update Task
router.post("/api/task/:task_id", jsonParser, (req, res, next) => controllers.api.updateTask(req, res, next));

// Health Check
router.get("/api/health", (req, res) => { return res.status(200).send({uptime: process.uptime(),message: 'Ok',date: new Date()})});


module.exports = router;
