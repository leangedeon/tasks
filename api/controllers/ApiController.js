const axios          = require('axios');
const { v4: uuidv4 } = require('uuid');
const logger         = require('../utils/logger');
const Services       = require('../services/index');
const db             = new Services();
const config         = require('../config');

module.exports = class Api {

	async getTasks(req, res, next) {
		const tasks = [];
		const quantity = req.params.quantity;
		logger.info("Getting tasks")
		try {
			let names = await this.getNames(quantity);

			names.map(name => {
				tasks.push({
					task_id: uuidv4(),
					name
				})
			})

			const savedTasks = await db.setTasks(tasks);
			logger.info("Getting tasks", savedTasks);
			
			return res.json(tasks);
		} catch (err) {
			logger.error(err)
            next(err);
		}
    }

	async updateTask(req, res, next) {
		const taskId = req.params.task_id;
		const status = req.body.status;

		try {
			logger.info("Updating task #", taskId)
			const updatedTasks = await db.updateState(taskId, status.toUpperCase);

			return res.json({'msg': 'ok'});
		} catch (err) {
			logger.error(err)
            next(err);
		}
    }

	async getNames(quantity) {

		const namesSaved = await db.getNames(quantity);
		let arrNamesStringSaved = [];
		let arrNamesStringFromApi = [];

		if (namesSaved.length) {
			arrNamesStringSaved = namesSaved.slice(0, quantity).map(el => el.name);
		}

		if (namesSaved.length < quantity) {
			const diffQuantity = (quantity - namesSaved.length);
			let arrNamesDb = [];

			const newNames = await axios.get(`${config.api}/?quantity=${diffQuantity}`);

			arrNamesDb = newNames.data.map(name => ({name}));
			
			const newNamesSaved = await db.setNames(arrNamesDb);

			arrNamesStringFromApi = newNamesSaved.map(el => el.name);

		}

		return arrNamesStringSaved.concat(arrNamesStringFromApi);

	}

}
