(function () {
    angular.module("libraryRouting", ["ui.router"])

    // State routing configuration
    .config(function ($stateProvider, $urlRouterProvider) {
        // Unmatched URL redirect
        $urlRouterProvider.otherwise("/main");

        $stateProvider.state("main", {
            url: "/main",
            templateUrl: "views/main.html"
        })
        .state("books", {
            url: "/books",
            templateUrl: "views/booklist.html",
            controller: "BookController",
            controllerAs: "books"
        })
        .state("book", {
            url: "/books/:id",
            templateUrl: "views/books.html",
            controller: "SingleBookController"
        });
    });
})();