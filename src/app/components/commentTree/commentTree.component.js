"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var CommentTreeComponent = (function () {
    function CommentTreeComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    CommentTreeComponent.prototype.ngOnInit = function () {
    };
    CommentTreeComponent.prototype.markdown = function (data) {
        var e = document.createElement('div');
        e.className = "tempDiv";
        e.innerHTML = data;
        this._sanitizer.bypassSecurityTrustHtml(e.innerHTML);
        var html = e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CommentTreeComponent.prototype, "cdata", void 0);
    CommentTreeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'commentTree',
            templateUrl: 'commentTree.component.html'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], CommentTreeComponent);
    return CommentTreeComponent;
}());
exports.CommentTreeComponent = CommentTreeComponent;
//# sourceMappingURL=commentTree.component.js.map