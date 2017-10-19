const mongoose = require("mongoose")

const PlayerSchema = mongoose.Schema({
	
	name: String,
	position: String,
}, {timestamps: true})

mongoose.model("Player", PlayerSchema)