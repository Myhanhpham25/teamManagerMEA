const mongoose = require("mongoose")

const QuestionSchema = mongoose.Schema({
	question: String, 
	answer: String,
	fake1: String,
	fake2: String,


}, {timestamps: true})


mongoose.model("Question", QuestionSchema)