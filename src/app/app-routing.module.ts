import { RegisterComponent } from './access/register/register.component';
import { LoginComponent } from './access/login/login.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"books", component: BookListComponent},
  {path:"movies", component: MovieListComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
