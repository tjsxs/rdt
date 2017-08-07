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
var fontpage_service_1 = require('../../../services/fontpage.service');
var commentTree_component_1 = require('../../commentTree/commentTree.component');
var router_1 = require('@angular/router');
var CmtComponent = (function () {
    function CmtComponent(_getCmt, _router) {
        this._getCmt = _getCmt;
        this._router = _router;
        this.isLoading = false;
    }
    CmtComponent.prototype.onClick = function (e) {
        if (e.target.tagName == "A") {
            // console.log(e);
            // console.log(e.target.pathname);
            e.preventDefault();
            this._router.navigateByUrl(e.target.pathname);
        }
    };
    CmtComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.isLoading = false;
        if (this.id != undefined) {
            this._getCmt.getSubreddit(this.sub, this.id)
                .subscribe(function (c) { _this.pdata = c[0].data.children[0].data, _this.cdata = c[1].data.children, console.log(c[1].data.children); }, null, function () { _this.isLoading = true; });
        }
    };
    CmtComponent.prototype.ngOninit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CmtComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CmtComponent.prototype, "sub", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CmtComponent.prototype, "onClick", null);
    CmtComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cmt',
            templateUrl: 'cmt.component.html',
            providers: [commentTree_component_1.CommentTreeComponent]
        }), 
        __metadata('design:paramtypes', [fontpage_service_1.FrontpageService, router_1.Router])
    ], CmtComponent);
    return CmtComponent;
}());
exports.CmtComponent = CmtComponent;
//# sourceMappingURL=cmt.component.js.map