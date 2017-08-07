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
var router_1 = require('@angular/router');
var fontpage_service_1 = require('../../services/fontpage.service');
var commentTree_component_1 = require('./commentTree.component');
var CommentComponent = (function () {
    function CommentComponent(_redditService, _route) {
        this._redditService = _redditService;
        this._route = _route;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this.p1 = params['subreddit'];
            _this.p2 = params['id'];
        });
        this._route.params
            .map(function (params) {
            return 'subreddit';
        });
        this._redditService.getSubreddit(this.p1, this.p2)
            .subscribe(function (c) { _this.post = c[0].data.children[0].data, _this.comments = c[1].data.children, console.log(c[1].data.children); });
    };
    CommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comment',
            templateUrl: 'comment.component.html',
            providers: [commentTree_component_1.CommentTree]
        }), 
        __metadata('design:paramtypes', [fontpage_service_1.FrontpageService, router_1.ActivatedRoute])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map