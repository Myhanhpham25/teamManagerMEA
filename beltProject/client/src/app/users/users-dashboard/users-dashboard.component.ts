import { Component, OnInit } from '@angular/core';
import { User } from "./../user"
import { HttpService } from './../../http.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {

	users : Array<User>

  constructor(private http_service : HttpService, private router: Router) { }

  ngOnInit() {
    
  	this.http_service.check()
  	 .then(user => console.log(user))
     .catch(() => this.router.navigate(["/login"]))

  	console.log("dashboard")
  	this.http_service.get_all()
  		.then(users => this.users = users)
  		.catch(err => console.log("get all the users error", err))
  }

   destroy(id){    
      this.http_service.destroy(id)
      .then(() => 
        this.ngOnInit())
      .catch(err => console.log("Error", err))
  }

}
