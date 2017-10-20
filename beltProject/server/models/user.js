const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	name: String, 
	email: String,
	password: String,
	score: Number 


}, {timestamps: true})


mongoose.model("User", UserSchema)