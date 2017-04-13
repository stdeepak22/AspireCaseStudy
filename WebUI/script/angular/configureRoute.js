
app.config(function ($routeProvider, $locationProvider) {

    //$sceDelegateProvider.resourceUrlWhitelist([
    //   // Allow same origin resource loads.
    //   'self',
    //   'http://localhost:65378/**'
    //]);



    $routeProvider
    .when("/", {
        templateUrl: "/PARTIALpAGE/_home.html",
        controller: "Login as c"
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
    .when("/Post:postId", {
        templateUrl: "/partialPage/_post.html",
        controller: "ctrlPost as pst"
    });

    $locationProvider.hashPrefix('');
});