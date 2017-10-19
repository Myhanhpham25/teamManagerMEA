const path= require("path")

const players = require("./../controllers/players.js")

module.exports = app => {
	app.post('/addplayer', players.addplayer)
	app.get('/get_all_players', players.get_all)
	// app.get('/check', players.check)
	app.get('/logout', players.logout)
	app.post('/destroy', players.destroy)

	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}