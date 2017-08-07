import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FrontpageService } from '../../../services/fontpage.service';
import { CommentTreeComponent } from '../../commentTree/commentTree.component';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cmt',
    templateUrl: 'cmt.component.html',
    providers: [CommentTreeComponent]
})
export class CmtComponent {
    @Input() id: string;
    @Input() sub: string;
    constructor(private _getCmt: FrontpageService, private _router: Router) { }

    @HostListener('click', ['$event'])
    onClick(e:any) {
        if(e.target.tagName == "A"){
            // console.log(e);
            // console.log(e.target.pathname);
            e.preventDefault();
            this._router.navigateByUrl(e.target.pathname);
        } 
        
    }

    pdata: any;
    cdata: any;

    isLoading = false;
    



    ngOnChanges() {
        this.isLoading = false;
        if (this.id != undefined) {

            this._getCmt.getSubreddit(this.sub, this.id)
                .subscribe(c => { this.pdata = c[0].data.children[0].data, this.cdata = c[1].data.children, console.log(c[1].data.children)}, null,() => {this.isLoading= true});
        }
    }
    ngOninit() {

    }
}