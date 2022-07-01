const fileService = require('../services/fileService')
const config = require('config')
const fs = require('fs')
const User = require('../models/User')
const Uuid = require('uuid')

class FaqController {
	async createFaq(req, res) {}
	async editFaq(req, res) {}
	async deleteFaq(req, res) {}
}

module.exports = new FaqController()
