"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var about_component_1 = require('./components/about/about.component');
var subreddit_component_1 = require('./components/subreddit/subreddit.component');
var comment_component_1 = require('./components/comments/comment.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'r/:subreddit',
        component: subreddit_component_1.SubredditComponent,
    },
    {
        path: 'r/:subreddit/comments/:id',
        component: comment_component_1.CommentComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map