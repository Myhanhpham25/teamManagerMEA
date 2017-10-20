const mongoose = require("mongoose")
const User = mongoose.model("User")
const Question = mongoose.model("Question")

module.exports = {

	login: (req, res) => {
		User.findOne({email: req.body.email})
			.then(user => {
				if(user){
					req.session.user = user
					console.log("session", req.session.user) 
					res.json(user)

				} else {
					let new_user = new User(req.body)

					new_user.save()
						.then(() => {
							console.log("sucessful register")
							req.session.user = new_user
							res.json(true)
						})
						.catch(err => {
							console.log("User save error", err)
							res.status(500).json(err)
						})
					}
			})	
	},

	get_all: (req, res) => {
		User.find({})
			.then(users => res.json(users))
			.catch(err => {
				console.log("user.find error", err)
				res.status(500).json(err)
			})
	},

	destroy: (req, res) => {
		console.log("destory user")
		var user_id = req.body.id
		User.remove({_id : user_id}, function(err, user){
			if(err){
				console.log("Error")
			}else{
				console.log("User successfully deleted")
				res.json(true)
			}
		})
	},

	logout: (req, res) => {
		req.session.destroy()
		res. redirect('/login')
	},

	check: (req, res) => {
		if(req.session.user){
			res.json(req.session.user)
		} else {
			res.status(401).json(false)
		}
	},


	addQuestion: (req, res) => {
		let new_question = new Question(req.body)

		new_question.save()
						.then(() => {
							console.log("sucessful add question")
							res.json(true)
						})
						.catch(err => {
							console.log("add question save error", err)
							res.status(500).json(err)
						})
	},

	get_questions: (req, res) => {
		Question.find({})
			.then(questions => res.json(questions))
			.catch(err => {
				console.log("question.find error", err)
				res.status(500).json(err)
			})
	},


}