const httpService = require("./httpService.js")


module.exports = class serviceRunner {
	constructor(serviceName) {
		this.serviceName = serviceName
	}
	execute() {
		const servicesConfiguration = require("./servicesConfiguration.js")
		const serviceConfiguration = servicesConfiguration[this.serviceName]
		const urlMonolytheApp = `http://${serviceConfiguration.host}:${serviceConfiguration.port}${serviceConfiguration.route}`
		httpService.get(urlMonolytheApp)
	}
}
