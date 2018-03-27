var request = require('request');

const USER_AGENT = process.env.USER_AGENT || null

function get (url) {
	const options = {
  		url: url,
  		headers: {
    		"User-Agent": USER_AGENT
  		}
	}
	request(url, (error, response, body) => {
		if(error) {
			console.log(error)
		} else {
			console.log(`response:${body}`)
		}
	})
}

module.exports = {
	get
}