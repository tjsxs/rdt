import { Component } from '@angular/core';
import { FrontpageService } from '../../services/fontpage.service';
import { CmtComponent } from './cmt/cmt.component';

/*temp*/

@Component({
    moduleId: module.id,
    selector: 'home',
    styleUrls: ['home.component.css'],
    templateUrl: 'home.component.html',
    providers: [CmtComponent]
})
export class HomeComponent {
    posts:any;
    sub:string;
    id:string;
    constructor(private _fps: FrontpageService ){}

    ngOnInit(){
        this.getHomePosts();
    
    }

    getHomePosts(){
        this._fps.getFP()
            .subscribe(posts => this.posts = posts.data.children, null, ()=>{
                this.sub = this.posts[0].data.subreddit,
                this.id = this.posts[0].data.id
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
        console.log(e);
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        
    }
}
