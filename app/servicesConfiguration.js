const VIREMENT_EXTERNE_DNS = process.env.VIREMENT_EXTERNE_DNS || "localhost"
const VIREMENT_EXTERNE_PORT = process.env.VIREMENT_EXTERNE_PORT || 3000

const VIREMENT_INTERNE_DNS = process.env.VIREMENT_INTERNE_DNS || "localhost"
const VIREMENT_INTERNE_PORT = process.env.VIREMENT_INTERNE_PORT || 3000

const MONOLYTHE_DNS = process.env.MONOLYTHE_DNS|| "localhost"
const MONOLYTHE_PORT = process.env.MONOLYTHE_PORT || 3000

module.exports =  {
	virement_externe:{
		operation: "get",
		host:VIREMENT_EXTERNE_DNS,
		port:VIREMENT_EXTERNE_PORT,
		route: "/api/V1/virement_externe"
	},
	virement_interne:{
		operation: "post",
		host:VIREMENT_INTERNE_DNS,
		port:VIREMENT_INTERNE_PORT,
		route: "/api/V1/virement_interne",
		body: `operation=virement_interne&accountNumber=${Math.floor(Math.random()*100000000)}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		}
	},
	opposition_carte: {
		operation: "get",
		host:MONOLYTHE_DNS,
		port:MONOLYTHE_PORT,
		route: `/api/carteService/${Math.floor(Math.random()*100000000)}/opposition/${Math.floor(Math.random()*100000000)}`
	},
	consultation_solde: {
		opperation: "get",
		host:MONOLYTHE_DNS,
		port:MONOLYTHE_PORT,
		route: `/services/consultation_solde/${Math.floor(Math.random()*100000000)}`
	},
	plafond_carte: {
		opperation: "get",
		host:MONOLYTHE_DNS,
		port:MONOLYTHE_PORT,
		route: "/XMLrequestConsumer",
		body: `
			<?xml version="1.0" ?>
			<Request
					service="plafondSolde"
					version="1.0.0"
					account="${Math.floor(Math.random()*100000000)}" />
				`
	}
}
