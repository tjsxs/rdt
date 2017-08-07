import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'commentTree',
    templateUrl: 'commentTree.component.html'
})
export class CommentTree {
    @Input() comments: Array<Object>;
}