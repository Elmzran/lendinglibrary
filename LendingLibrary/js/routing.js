(function () {
    angular.module("libraryRouting", ["ngRoute"])

    // Routing configuration
    .config(function ($routeProvider) {
        $routeProvider.when("/books", {
            templateUrl: "views/books.html",
            controller: "BookController",
            controllerAs: "books"
        })
        .when("/main", {
            templateUrl: "views/main.html",
        })
        .otherwise({redirectTo: '/main'});
    });
})();