import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { CommentComponent } from './components/comments/comment.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'r/:subreddit',
        component: SubredditComponent,
    },
    {
        path: 'r/:subreddit/comments/:id',
        component: CommentComponent
    }
       
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);