module.exports =  {
	virement_externe:{
		operation: "get",
		route: "/services?op=virement_externe"
	},
	virement_interne:{
		operation: "post",
		route: "/apiEndPoint",
		body: "operation=virement_interne&accountNumber=3696492790r",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		}
	},
	opposition_carte: {
		operation: "get",
		route: "/api/carteService/26753864/opposition/2473"
	},
	consultation_solde: {
		opperation: "get",
		route: "/services/consultation_solde/638432379623"
	},
	plafond_carte: {
		opperation: "get",
		route: "/XMLrequestConsumer",
		body: `
			<?xml version="1.0" ?>
			<Request
					service="plafondSolde"
					version="1.0.0"
					account="wfdsfsdfs" />
				`
	}
}
