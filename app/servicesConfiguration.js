const MONOLYTHE_DNS = process.env.MONOLYTHE_DNS|| "localhost"
const MONOLYTHE_PORT = process.env.MONOLYTHE_PORT || 3000

const VIREMENT_EXTERNE_DNS = process.env.VIREMENT_EXTERNE_DNS || "localhost"
const VIREMENT_EXTERNE_PORT = process.env.VIREMENT_EXTERNE_PORT || 3000

const VIREMENT_INTERNE_DNS = process.env.VIREMENT_INTERNE_DNS || "localhost"
const VIREMENT_INTERNE_PORT = process.env.VIREMENT_INTERNE_PORT || 3000

const CONSULTATION_SOLDE_DNS = process.env.CONSULTATION_SOLDE_DNS || "localhost"
const CONSULTATION_SOLDE_PORT = process.env.CONSULTATION_SOLDE_PORT || 3000

const OPPOSITION_CARTE_DNS = process.env.OPPOSITION_CARTE_DNS || "localhost"
const OPPOSITION_CARTE_PORT = process.env.OPPOSITION_CARTE_PORT || 3000

const PLAFOND_CARTE_DNS = process.env.PLAFOND_CARTE_DNS || "localhost"
const PLAFOND_CARTE_PORT = process.env.PLAFOND_CARTE_PORT || 3000

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
		host:CONSULTATION_SOLDE_DNS,
		port:CONSULTATION_SOLDE_PORT,
		route: "/api/V1/consultation_solde"
	},
	consultation_solde: {
		opperation: "get",
		host:OPPOSITION_CARTE_DNS,
		port:OPPOSITION_CARTE_PORT,
		route: "/api/V1/opposition_carte"
	},
	plafond_carte: {
		opperation: "get",
		host:PLAFOND_CARTE_DNS,
		port:PLAFOND_CARTE_PORT,
		route: "/api/V1/plafond_carte",
		body: `
			<?xml version="1.0" ?>
			<Request
					service="plafondSolde"
					version="1.0.0"
					account="${Math.floor(Math.random()*100000000)}" />
				`
	}
}
