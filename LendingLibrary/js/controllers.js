// Web application code for the books.
(function () {
    // Main program module
    angular.module("library", ["libraryRouting", "ngResource"])

    // Controller for data for all books
    .controller("BookController", ["Data", function (Data) {

        // Get book data
        var self = this;
        self.bookData = [];
        this.getBookData = function () {
            self.bookData = Data.resource().query();
        };

        // Save ALL book data
        this.saveBookData = function () {
            Data.http("POST", "", self.bookData);
        };
        
    }])

    // Controller for a single book
    .controller("SingleBookController", ["$stateParams", "$scope", "Data", function ($stateParams, $scope, Data) {

        // Upload specific book
        $scope.saveBook = function () {
            Data.http("PUT", $stateParams.id, $scope.currentBook);
        };

        // Get data for selected book
        $scope.selectBook = function () {
            $scope.currentBook = Data.resource().get({id: $stateParams.id});
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