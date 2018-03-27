const http = require("http");

const USER_AGENT = process.env.USER_AGENT || null

function get (url) {
	const options = {
  		url: url,
  		headers: {
    		'User-Agent': USER_AGENT
  		}
	}
	console.log(options)
	http.get(options, res => {
  		res.setEncoding("utf8");
  		res.on("data", data => {
    		console.log(`response:${data}`)
  		})
	})
}

module.exports = {
	get
}