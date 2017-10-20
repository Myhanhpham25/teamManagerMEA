const path= require("path")
const users = require('./../controllers/users.js')

module.exports = app => {
	app.post('/login', users.login)
	app.get('/get_all_users', users.get_all)
	app.post('/destroy', users.destroy)
	app.get('/logout', users.logout)
	app.get("/check", users.check)
	app.post('/addQuestion', users.addQuestion)
	app.get("/get_questions", users.get_questions)
	// app.post("/addscore", users.addscore)


	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))

}