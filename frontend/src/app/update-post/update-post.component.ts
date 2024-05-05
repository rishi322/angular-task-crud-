import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  post={
    title:'',
    body:'',
    tags:'',
    active:false
  }
  constructor(private route: ActivatedRoute, private router: Router, public userService: UserServicesService){
    
  }
postId: String = ''
data: any = null;
  ngOnInit(): void {

     this.route.params.subscribe(params => {
      this.postId = params['id']; 
      console.log(this.postId); 
    })

    this.userService.findPosts(this.postId).subscribe(data=>{
        this.data = data;

        this.post.active = data.active;
        this.post.body = data.body;
        this.post.tags = data.tags;
        this.post.title = data.title;
    })

    
  }


  onSubmit(){
    this.userService.updatePost(this.postId, this.post).subscribe(
      (data) => {
        console.log('Post updated successfully:', data);
        this.router.navigate(['./Posts'])
      },
      (error) => {
        console.error('Error updating post:', error);
    
      }
    );
  }

}
