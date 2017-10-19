const mongoose = require("mongoose")
const Player = mongoose.model("Player")

// const players = [{name: "Hanh", position: "Forward", createdAt: new Date()}, {name: "Ha", position: "Baller", createdAt: new Date()}]

module.exports = {

	get_all: (req, res) => {
		Player.find({})
		.then(players => res.json(players))
		.catch(err=> {
			console.log("player find error", err)
			res.status(500).json(err)
		})
	},

	addplayer: (req, res) => {
		let new_player = new Player(req.body)
		new_player.save()
		.then(() => {
			req.session.players = new_player
			res.json(true)
		})
		.catch(err => {
			console.log("playe errors", err)
			res.status(500).json(err)
		})
	
	},

	logout: (req, res) => {
		req.session.destroy()
		res. redirect('/addplayer')
	},


	destroy: (req, res) => {
		console.log("to destroy")
		var player_id = req.body.id 
		Player.remove({_id : player_id}, function(err, player){
			if(err){
				console.log("Error")
			}else{
				console.log("Player Successfully deleted")
				res.json(true)
			}
			
		})

	}
}

	// addplayer: (req, res) => {
	// 	Player.findOne({name: req.body.name})
	// 		.then(player => {
	// 			if(player){
	// 				req.session.player = player
	// 				res.json(true)
	// 			}else{
	// 				let new_player = new Player(req.body)
					
	// 				new_player.save()
	// 					.then(() => {
	// 						req.session.player = new_player
	// 						res.json(true)
	// 					})
	// 					.catch(err => {
	// 						console.log("Player save error", err)
	// 						res.status(500).json(err)
	// 				})
	// 			}
	// 		})
	// 	},

	// check: (req, res) => {
	// 	if(req.session.player){
	// 		res.json(req.session.player)
	// 	}else{
	// 		res.status(401).json(false)
	// 	}
	// },

