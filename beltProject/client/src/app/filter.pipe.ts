import { Pipe, PipeTransform } from '@angular/core';
import { User } from "./users/user"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: Array<User>, search_text: string): Array<User> {

     if(!search_text){ return users } 

  	search_text = search_text.toLowerCase() 

    return users.filter(user => user.name.toLowerCase().includes(search_text))
  }

}




