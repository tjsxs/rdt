import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FrontpageService } from '../../services/fontpage.service';
import { HomeComponent } from '../../components/home/home.component';
import { CommentTreeComponent } from '../commentTree/commentTree.component';

import 'rxjs/add/operator/map'

@Component({
    moduleId: module.id,
    selector: 'comment',
    templateUrl: 'subreddit.component.html',
    providers: [CommentTreeComponent]
})
export class SubredditComponent implements OnInit { 
    subreddit: string;
    subredditPosts:any[];
    subName: any;


    sub:string;
    id:string;

    constructor(
        private _redditService:FrontpageService,
        private _route:ActivatedRoute
    ){}

    ngOnInit(){
        this._route.params
            .map(params => params['subreddit'])
            .subscribe((subreddit) => {
                    this.subName = subreddit;
                    this._redditService.getSubreddit(subreddit, null)
                        .subscribe( sposts => {
                            this.subredditPosts = sposts.data.children;
                        }, null, ()=>{
                this.sub = this.subredditPosts[0].data.subreddit,
                this.id = this.subredditPosts[0].data.id
            })
                });
               
    }

    tjs(sub:string,id:string){
        this.sub = sub;
        this.id = id;
    }

        markdown(data: any) {

        var e = document.createElement('div');
        e.className = "tempDiv";
        e.innerHTML = data;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        
    }

}
