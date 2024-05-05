import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  verifyUser(user: any){

    return this.http.post<any>("http://localhost:3000/User/verifyUser",user)

  }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/User/saveUser", userData);
  }

  getPosts(){

    return this.http.get<any>("http://localhost:3000/Post/getPost")

  }
  findPosts(id:any){

    return this.http.get<any>("http://localhost:3000/Post/posts/" + id)

  }
  
  createPost(post: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/Post/addposts", post);
  }
  
  deletePost(id: string) {
    return this.http.delete<any>(`http://localhost:3000/Post/posts/${id}`);
  }

  updatePost(postId: any, updatedPost: any) {
    return this.http.put<any>(`http://localhost:3000/Post/updatePosts/${postId}`, updatedPost);
  }

}
