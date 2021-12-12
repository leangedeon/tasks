"use strict"
const axios    = require('axios');
const { v4: uuidv4 } = require('uuid');
const logger = require('../utils/logger');

module.exports = class Api {

	async getTasks(req, res) {
		const tasks = [];
		const quantity = req.params.quantity;
		logger.info("Getting tasks")
		try {
			let names = await axios.get(`https://lorem-faker.vercel.app/api?quantity=${quantity}`);

			names.data.map(name => {
				tasks.push({
					id: uuidv4(),
					name
				})
			})

			return res.json(tasks);
		} catch (err) {
			return res.status(500).send({'msg': 'error'})
		}
    }

	async updateTask(req, res) {
		try {
			logger.info("Updating task #", req.params.task_id)
			return res.json({'msg': 'ok'});
		} catch (err) {
			return res.status(500).send({'msg': 'error'})
		}
    }

}
