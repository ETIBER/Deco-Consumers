const http = require("http");
function getUrl (url) {
	http.get(url, res => {
  		res.setEncoding("utf8");
  		res.on("data", data => {
    		console.log(`response:${data}`)
  		});
	});
}

module.exports = {
	getUrl
}