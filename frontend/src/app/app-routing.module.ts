import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [{
  path:'',

  children: [{path:'updatePost/:id',component:UpdatePostComponent},{path:'register',component:RegisterationComponent},{path:'add-data',component:AddPostComponent} ,{path:'Posts', component: UserHomeComponent},{path:'',component:LoginComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
