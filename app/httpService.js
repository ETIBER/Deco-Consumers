var request = require('request');

const USER_AGENT = process.env.USER_AGENT 

function get (url) {
	const options = {
  		url: url,
  		headers: {
    		"User-Agent": USER_AGENT
  		}
	}
	request(options, (error, response, body) => {
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