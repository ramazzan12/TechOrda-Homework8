import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardComponent} from './posts/card.component';
import {CommentsComponent} from './comments/comments.component';


const routes: Routes = [
  {path: 'posts', component: CardComponent},
  {path: 'comments', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
