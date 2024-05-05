import { Component } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {

  constructor(private userRegistrationService: UserServicesService,private route: Router) { }

  username:String = ''
  password:String = ''

  email: String = ''
mobile:String = ''
gender:String = ''


  register(){
    this.userRegistrationService.registerUser({username:this.username,password:this.password,email:this.email,mobile:this.mobile,gender:"male"}).subscribe(
      (response) => {
        console.log('User registered successfully:', response);

        alert('welcome user')
        

        this.route.navigate(['./Posts']);
      },
      (error) => {
        console.error('Error registering user:', error);
     
      }
    );
  }
}
