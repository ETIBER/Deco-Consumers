const ServiceRunner = require("./ServiceRunner")
const servicesConfiguration = require("./servicesConfiguration.js")


servicesConfiguration.virement_externe.run = process.env.VIREMENT_EXTERNE|| null
servicesConfiguration.virement_interne.run  = process.env.VIREMENT_INTERNE || null
servicesConfiguration.opposition_carte.run  = process.env.OPPOSITION_CARTE || null
servicesConfiguration.consultation_solde.run  = process.env.CONSULTATION_SOLDE || null
servicesConfiguration.plafond_carte.run  = process.env.PLAFOND_CARTE || null




for (let serviceName in servicesConfiguration) {
	const serviceRun = servicesConfiguration[serviceName]
	if (serviceRun.run){
		const service = new ServiceRunner(serviceName)
		setInterval(() => {
			service.execute()
		},1000)
	}
}
