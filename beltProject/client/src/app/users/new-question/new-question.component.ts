import { Component, OnInit } from '@angular/core';
import { Question } from "./../question"
import { HttpService } from './../../http.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
	new_question ; Question 

  constructor(private http_service : HttpService, private router: Router) { }

  ngOnInit() {
  	this.new_question = new Question
  }

  add_question(){
  	this.http_service.addQuestion(this.new_question)
  		.then(() => this.router.navigate(['dashboard']))
		.catch(err => console.log("question adding error", err))
  }
}
