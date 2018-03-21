const httpService = require("./httpService.js")

const MONOLYTHE_DNS = process.env.MONOLYTHE_DNS|| localhost
const MONOLYTHE_PORT = process.env.MONOLYTHE_PORT || 3000
const CONSUME_APP = [
	process.env.CONSUME_APP_1 || null,
	process.env.CONSUME_APP_2 || null,
	process.env.CONSUME_APP_3 || null,
	process.env.CONSUME_APP_4 || null,
	process.env.CONSUME_APP_5 || null
]

const urlMonolythe = `http://${MONOLYTHE_DNS}:${MONOLYTHE_PORT}`

for (let consumeAppNumber = 0; consumeAppNumber<5; consumeAppNumber++) {
	const urlMonolytheApp = `${urlMonolythe}/app${consumeAppNumber + 1}`
	if (CONSUME_APP[consumeAppNumber] != null){
		setInterval(() => {
			httpService.getUrl(urlMonolytheApp)
		},1000)
	}
}
