import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/add/operator/map"
import "rxjs"
import { User } from "./users/user"
import { Question } from "./users/question"



@Injectable()
export class HttpService {

  constructor(private http: Http) { }

 	create(new_user : User ){
 		console.log(new_user)
		return this.http.post('/login', new_user).map(data => data.json()).toPromise()
	}

	get_all(){
		console.log("To get all users")
		return this.http.get("/get_all_users").map(data => data.json()).toPromise()
	}

	destroy(id){
		return this.http.post("/destroy", {id:id}).map(data => data.json()).toPromise()
	}

	check(){
    	return this.http.get("/check").map(data => data.json()).toPromise()
  }

  	addQuestion(new_question : Question ){
  		return this.http.post('/addQuestion', new_question).map(data => data.json()).toPromise()
  	}

  	get_questions(){
  		return this.http.get("/get_questions").map(data => data.json()).toPromise()
  	}

  	// addscore(id){
  	// 	this.http.post("/addscore", {id:id}).map(data => data.json()).toPromise()
  	// }
 

  

}
