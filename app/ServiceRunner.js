const httpService = require("./httpService.js")


module.exports = class serviceRunner {
	constructor(endPoint,serviceName) {
		this.endPoint = endPoint
		this.serviceName = serviceName
	}
	execute() {
		const servicesConfiguration = require("./servicesConfiguration.js")
		const serviceConfiguration = servicesConfiguration[this.serviceName]
		const urlMonolytheApp = `${this.endPoint}${serviceConfiguration.route}`
		httpService.get(urlMonolytheApp)
	}
}