app.directive('dirCategory', function () {
    return {
        scope:{category:'='},
        templateUrl: '/partialPage/oneCategory.html'
    };
});

app.directive('dirPost', function () {
    return {
        scope: { post: '=' },
        templateUrl: '/partialPage/onePost.html'
    };
});