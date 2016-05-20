// Web application code for the books.
(function () {
    // Main program module
    angular.module("library", ["libraryRouting"])

    // Controller for book data
    .controller("BookController", ["$http", "$routeParams", function ($http, $routeParams) {

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
        }

        // Upload specific book
        this.saveBook = function () {
            $http.put("api/Book/" + $routeParams.id, self.currentBook);
        }

        // Get data for selected book
        this.selectBook = function () {
            $http.get("api/Book/" + $routeParams.id).success(function (data) {
                self.currentBook = data;
                console.log(data);
            })
        }

        // Add a borrower to a book
        this.addBorrower = function (borrowedBook, borrower) {
            borrowedBook.borrower = borrower;
        }

        // Swap book between available and borrowed
        this.swapAvailability = function (book) {
            if (book.availability === true)
                book.availability = false;
            else
                book.availability = true;
        }
    }])
})();