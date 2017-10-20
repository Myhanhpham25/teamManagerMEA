import { Component, OnInit } from '@angular/core';
import { User } from "./../user"
import { HttpService } from './../../http.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
	new_user : User 
  user : User 

  constructor(private http_service : HttpService, private router: Router) { }

  ngOnInit() {
  	this.new_user = new User 
  
 
  }
  create_user(){
  	console.log("Created", this.new_user)
  	this.http_service.create(this.new_user)
      .then(user => this.user = user)
  		.then(() => this.router.navigate(['/dashboard']))
		.catch(err => console.log("user login error", err))

  }

}
