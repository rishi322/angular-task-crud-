import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{


  
  constructor(private userService: UserServicesService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.getPost()
  }
  post:any = null
  getPost(){

    this.userService.getPosts().subscribe(data=>{

      this.post = data.post
      

    })
  }
updatePost(id:any){
console.log(id)


}
  deletePost(id: any){
      console.log(id)
      this.userService.deletePost(id).subscribe(
        () => {
          console.log('Post deleted successfully');
          
          window.location.reload();
         
        },
        (error) => {
          console.error('Error deleting post:', error);
        
        }
      );
  }

}
