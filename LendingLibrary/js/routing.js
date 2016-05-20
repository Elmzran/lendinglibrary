(function () {
    angular.module("libraryRouting", ["ngRoute"])

    // Routing configuration
    .config(function ($routeProvider) {
        $routeProvider.when("/books/:id", {
            templateUrl: "views/books.html",
            controller: "SingleBookController",
            controllerAs: "books"
        })
        .when("/books", {
            templateUrl: "views/booklist.html",
            controller: "BookController",
            controllerAs: "books"
        })
        .when("/main", {
            templateUrl: "views/main.html",
        })
        .otherwise({redirectTo: '/main'});
    });
})();