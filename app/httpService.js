const http = require("http");

const USER_AGENT = process.env.USER_AGENT || null

function get (url) {
	console.log(USER_AGENT)
	const options = {
  		url: url,
  		headers: {
    		'User-Agent': USER_AGENT
  		}
	}
	http.get(options, res => {
  		res.setEncoding("utf8");
  		res.
  		res.on("data", data => {
    		console.log(`response:${data}`)
  		})
	})
}

module.exports = {
	get
}