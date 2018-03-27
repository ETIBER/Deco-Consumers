const ServiceRunner = require("./ServiceRunner")
const servicesConfiguration = require("./servicesConfiguration.js")

const MONOLYTHE_DNS = process.env.MONOLYTHE_DNS|| "localhost"
const MONOLYTHE_PORT = process.env.MONOLYTHE_PORT || 3000

const urlMonolythe = `http://${MONOLYTHE_DNS}:${MONOLYTHE_PORT}`

servicesConfiguration.virement_externe.run = process.env.VIREMENT_EXTERNE|| null
servicesConfiguration.virement_interne.run  = process.env.VIREMENT_INTERNE || null
servicesConfiguration.opposition_carte.run  = process.env.OPPOSITION_CARTE || null
servicesConfiguration.consultation_solde.run  = process.env.CONSULTATION_SOLDE || null
servicesConfiguration.plafond_carte.run  = process.env.PLAFOND_CARTE || null




for (let serviceName in servicesConfiguration) {
	const serviceRun = servicesConfiguration[serviceName]
	if (serviceRun.run){
		const service = new ServiceRunner(urlMonolythe,serviceName)
		setInterval(() => {
			service.execute()
		},1000)
	}
}
