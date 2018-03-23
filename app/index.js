const httpService = require("./httpService.js")
const serviceRouteConfiguration = require("./serviceRouteConfiguration.js")

const MONOLYTHE_DNS = process.env.MONOLYTHE_DNS|| "localhost"
const MONOLYTHE_PORT = process.env.MONOLYTHE_PORT || 3000

serviceRouteConfiguration.virement_externe.run = process.env.VIREMENT_EXTERNE|| null
serviceRouteConfiguration.virement_interne.run  = process.env.VIREMENT_INTERNE || null
serviceRouteConfiguration.opposition_carte.run  = process.env.OPPOSITION_CARTE || null
serviceRouteConfiguration.consultation_solde.run  = process.env.CONSULTATION_SOLDE || null
serviceRouteConfiguration.plafond_carte.run  = process.env.PLAFOND_CARTE || null


const urlMonolythe = `http://${MONOLYTHE_DNS}:${MONOLYTHE_PORT}`

for (let serviceName in serviceRouteConfiguration) {
	const service = serviceRouteConfiguration[serviceName]
	const urlMonolytheApp = `${urlMonolythe}${service.route}`
	console.log(service.route)
	if (service.run){
		setInterval(() => {
			httpService.get(urlMonolytheApp)
		},1000)
	}
}
