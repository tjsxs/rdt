import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'commentTree',
    templateUrl: 'commentTree.component.html'
})
export class CommentTreeComponent {
    html: string;
    constructor(private _sanitizer: DomSanitizer) { }
    @Input() cdata: Array<Object>;

    ngOnInit() {
    }

    
    markdown(data: any) {

        var e = document.createElement('div');
        e.className = "tempDiv";
        e.innerHTML = data;
    
        this._sanitizer.bypassSecurityTrustHtml(e.innerHTML);
        var html = e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        return this._sanitizer.bypassSecurityTrustHtml(html);
    }


}