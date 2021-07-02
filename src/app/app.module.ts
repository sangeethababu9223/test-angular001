import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { AccessModule } from './access/access.module';
import { MoviesModule } from './movies/movies.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MoviesModule,
    BooksModule,
    UsersModule,
    AccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
