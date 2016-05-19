(function () {
    angular.module("libraryRouting", ["ngRoute"])

    // Routing configuration
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "views/books.html",
            controller: "BookController",
            controllerAs: "books"
        })
    });
})();