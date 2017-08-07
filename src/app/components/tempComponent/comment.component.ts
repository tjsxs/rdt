import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FrontpageService } from '../../services/fontpage.service';
import { HomeComponent } from '../../components/home/home.component';
import { CommentTree } from './commentTree.component'

@Component({
    moduleId: module.id,
    selector: 'comment',
    templateUrl: 'comment.component.html',
    providers: [CommentTree]
})
export class CommentComponent {
    post: any;
    comments: any;
    p1:any;
    p2:any;
    constructor(
        private _redditService: FrontpageService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this._route.params.forEach((params) => {
            this.p1 = params['subreddit'];
            this.p2 = params['id'];
        });
        this._route.params
            .map(function (params) {
                return 'subreddit';
            })
            this._redditService.getSubreddit(this.p1, this.p2)
                .subscribe(c=>{this.post = c[0].data.children[0].data,this.comments = c[1].data.children ,console.log(c[1].data.children)});
               
    }
}
