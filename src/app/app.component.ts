import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private route: Router, private userService: UserService){
    auth.user$.subscribe(user => {
      if(user){
        this.userService.save(user);
      let url = localStorage.getItem('returnUrl');
      this.route.navigateByUrl(url);
      }
    
    })
    
    
  }


  

}
