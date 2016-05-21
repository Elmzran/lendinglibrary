// Web application code for the books.
(function () {
    // Main program module
    angular.module("library", ["libraryRouting"])

    // Controller for data for all books
    .controller("BookController", ["$http", function ($http) {

        // Get book data
        var self = this;
        self.bookData = [];
        this.getBookData = function () {
            $http.get("api/Book").success(function (data) {
                self.bookData = data;
            });
        };

        // Save ALL book data
        this.saveBookData = function () {
            $http.post("api/Book", self.bookData);
        };
        
    }])

    // Controller for a single book
    .controller("SingleBookController", ["$http", "$stateParams", "$scope", function ($http, $stateParams, $scope) {

        // Upload specific book
        $scope.saveBook = function () {
            $http.put("api/Book/" + $stateParams.id, $scope.currentBook);
        };

        // Get data for selected book
        $scope.selectBook = function () {
            $http.get("api/Book/" + $stateParams.id).success(function (data) {
                $scope.currentBook = data;
                console.log(data);
            })
        };

        // Add a borrower to a book
        $scope.addBorrower = function (borrowedBook, borrower) {
            borrowedBook.borrower = borrower;
        };

        // Swap book between available and borrowed
        $scope.swapAvailability = function (book) {
            if (book.availability === true)
                book.availability = false;
            else
                book.availability = true;
        };
    }]);
})();