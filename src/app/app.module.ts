import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CommentComponent } from './components/comments/comment.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { CmtComponent } from './components/home/cmt/cmt.component';
import { CommentTreeComponent } from './components/commentTree/commentTree.component';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ],
  declarations: [ 
                  AppComponent ,
                  NavbarComponent,
                  HomeComponent,
                  AboutComponent,
                  CommentComponent,
                  SubredditComponent,
                  CmtComponent,
                  CommentTreeComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
