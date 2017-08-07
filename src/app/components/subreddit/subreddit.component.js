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
var commentTree_component_1 = require('../commentTree/commentTree.component');
require('rxjs/add/operator/map');
var SubredditComponent = (function () {
    function SubredditComponent(_redditService, _route) {
        this._redditService = _redditService;
        this._route = _route;
    }
    SubredditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['subreddit']; })
            .subscribe(function (subreddit) {
            _this.subName = subreddit;
            _this._redditService.getSubreddit(subreddit, null)
                .subscribe(function (sposts) {
                _this.subredditPosts = sposts.data.children;
            }, null, function () {
                _this.sub = _this.subredditPosts[0].data.subreddit,
                    _this.id = _this.subredditPosts[0].data.id;
            });
        });
    };
    SubredditComponent.prototype.tjs = function (sub, id) {
        this.sub = sub;
        this.id = id;
    };
    SubredditComponent.prototype.markdown = function (data) {
        var e = document.createElement('div');
        e.className = "tempDiv";
        e.innerHTML = data;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    };
    SubredditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comment',
            templateUrl: 'subreddit.component.html',
            providers: [commentTree_component_1.CommentTreeComponent]
        }), 
        __metadata('design:paramtypes', [fontpage_service_1.FrontpageService, router_1.ActivatedRoute])
    ], SubredditComponent);
    return SubredditComponent;
}());
exports.SubredditComponent = SubredditComponent;
//# sourceMappingURL=subreddit.component.js.map