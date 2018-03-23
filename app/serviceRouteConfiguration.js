module.exports =  {
	virement_externe:{
		operation: "get",
		route: "/services?op=virement_externe"
	},
	virement_interne:{
		operation: "post",
		route: "/apiEndPoint",
		body: `operation=virement_interne&accountNumber=${Math.floor(Math.random()*100000000)}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		}
	},
	opposition_carte: {
		operation: "get",
		route: `/api/carteService/${Math.floor(Math.random()*100000000)}/opposition/${Math.floor(Math.random()*100000000)}`
	},
	consultation_solde: {
		opperation: "get",
		route: /services/consultation_solde/${Math.floor(Math.random()*100000000)}`
	},
	plafond_carte: {
		opperation: "get",
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
