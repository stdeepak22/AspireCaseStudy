
app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.caseInsensitiveMatch = true;

    $routeProvider
    .when("/", {
        templateUrl: "/partialPage/_home.html",
        controller: "ctrlHome as home"
    })
    .when("/Category", {
        templateUrl: "/partialPage/_category.html",
        controller: "ctrlCategory as ct"
    })
    .when("/Category/:catId", {
        templateUrl: "/partialPage/_category.html",
        controller: "ctrlCategory as ct"
    })
    .when("/Post", {
        templateUrl: "/partialPage/_post.html",
        controller: "ctrlPost as pst"
    })
    .when("/Post/:postId", {
        templateUrl: "/partialPage/_post.html",
        controller: "ctrlPost as pst"
    });

    $locationProvider.hashPrefix('');
});