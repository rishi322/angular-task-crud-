import { Component } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  post: any = { title: '', body: '', tags: '', active: false }; // Initialize an empty post object
  constructor(private userServices: UserServicesService, private router: Router){}
  
  onSubmit() {
    this.userServices.createPost(this.post).subscribe(
      (response) => {
        console.log('Post created successfully:', response);
     
        this.post = { title: '', body: '', tags: '', active: false };
        this.router.navigate(['./Posts'])
      },
      (error) => {
        console.error('Error creating post:', error);
      
      }
    );
  }
}
