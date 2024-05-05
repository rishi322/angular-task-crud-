import { Component } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any[] = [];

  username = ""
  password = ""




  constructor(private userService: UserServicesService,private router:Router) { }

  ngOnInit(): void {
   
  }

  
  findUser() {
    console.log(this.username, this.password)
    this.userService.verifyUser({userName: this.username,password: this.password}).subscribe(data => {
      console.log(data)
      console.log(data.data[0].username)

      if(data.data[0].username == this.username){
          if(data.data[0].password == this.password){
            alert('correct ')
            
          this.router.navigate(['./Posts'])
          }else{
            alert('incorrect password')
          }
      }else{
        alert("incorrect user name")
      }
    });
    return this.user;
  }
}
