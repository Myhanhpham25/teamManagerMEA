import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from "@angular/router"
import { Question } from "./../question"
import { User } from "./../user"

@Component({
  selector: 'app-lets-play',
  templateUrl: './lets-play.component.html',
  styleUrls: ['./lets-play.component.css']
})
export class LetsPlayComponent implements OnInit {
	questions : Array<Question>
	user : User 
  rand : number
  idx : number 
  answer = false  

  constructor(private http_service : HttpService, private router: Router) { }

  ngOnInit() {
    this.user = this.user

    // this.questions
    // for(let idx = 0; idx < Array.length ; idx++){
    //     let rand = Math.floor(Math.random() * Array.length )
    //     let temp = this.questions[idx]
    //     this.questions[idx] = this.questions[rand]
    //     this.questions[rand] = temp 
    //   }
   
  	this.http_service.get_questions()
      .then(questions => this.questions = questions)
      .catch(err => console.log("get all the questions error", err))

  }

    
  // results(id){
  //   console.log("Score")
  //   if(this.answer == true)
  //      this.user.score += 1
  //    this.http_service.addscore(id)

  // }

}
