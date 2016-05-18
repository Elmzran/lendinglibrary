// Web application code for the books.
(function () {
    // Main program module
    var app = angular.module("library", []);

    // Controller for book data
    app.controller("BookController", ["$http", function ($http) {

        // Get book data
        var self = this;
        self.bookData = [];
        $http.get("api/Book").success(function(data) {
            self.bookData = JSON.parse(data);
            console.log(self.bookData);
        });

        // Save book data
        this.saveBookData = function () {
            $http.post("api/Book", self.bookData);
            console.log(self.bookData);
        }

        this.addBorrower = function (borrowedBook, borrower) {
            borrowedBook.borrower = borrower;
        }

        this.swapAvailability = function (book) {
            if (book.availability === true)
                book.availability = false;
            else
                book.availability = true;
        }
    }]);

    // Controller for checkout status
    app.controller("AvailabilityController", function () {
        this.availability = true;
        this.swapAvailability = function () {
            if (this.availability === true)
                this.availability = false;
            else
                this.availability = true;
        }
    });

    /* var books = [{
        title: "Ubik",
        author: "Philip K. Dick",
        cover: "./img/books/ubik.png",
        description: "Ubik is a 1969 science fiction novel by American writer Philip K. Dick. It is one of Dick's most acclaimed novels. It was chosen by Time magazine as one of the 100 greatest novels since 1923. In his review for Time, critic Lev Grossman described it as \"a deeply unsettling existential horror story, a nightmare you'll never be sure you've woken up from.\"\n\nThe novel takes place in the \"North American Confederation\" of 1992, where civilians regularly travel to the Moon, and psi phenomena are common. The novel's protagonist, Joe Chip, is a debt-ridden technician for Glen Runciter's \"prudence organization\", which employs people with the ability to block psychic powers (like an anti-telepath, preventing a telepath from reading a mind) to help enforce privacy. Runciter runs the company with the assistance of his deceased wife Ella, who is kept in a state of \"half-life\", a form of cryonic suspension that gives the deceased limited consciousness and the ability to communicate.",
        availability: true
    }, {
        title: "Ubik: The Screenplay",
        author: "Philip K. Dick",
        cover: "./img/books/ubik_screenplay.png",
        description: "\"An accident has occurred. Joe Chip and his colleagues - all but one of them - have narrowly escaped an explosion at a moon base. Or is it the other way round? Did Joe and the others die, and did the one fatality, Glen Runciter, actually survive? ... From the stuff of space opera, Dick spins a deeply unsettling existential horror story, a nightmare you'll never be sure you've woken up from.\"\n-Lev Grossman, Time\n\nIn 1974, Philip K. Dick was commissioned to write a screenplay based on his novel Ubik. The film was eventually scrapped, but the screenplay was saved and later published in 1985. Featuring scenes that are not in the book and a surreal playfulness - the style of the writing goes back in time just like the technology in the book's dreamworld - this screenplay is the only one Dick wrote and features his signature mix of paranoia, humor, and big-idea philosophy.",
        availability: true
    }, {
        title: "Rendezvous with Rama",
        author: "Arthur C. Clarke",
        cover: "./img/books/rendezvous_with_rama.png",
        description: "At first, only a few things are known about the celestial object that astronomers dub Rama. It is huge, weighing more than ten trillion tons. And it is hurtling through the solar system at an inconceivable speed. Then a space probe confirms the unthinkable: Rama is no natural object. It is, incredibly, an interstellar spacecraft. Space explorers and planet-bound scientists alike prepare for mankind's first encounter with alien intelligence. It will kindle their wildest dreams... and fan their darkest fears. For no one knows who the Ramans are or why they have come. And now the moment of rendezvous awaits - just behind a Raman airlock door.",
        availability: true
    }, {
        title: "Ringworld",
        author: "Larry Niven",
        cover: "./img/books/ringworld.png",
        description: "Pierson's puppeteers, three-leg two-head aliens find immense structure in unexplored part of the universe. Frightened of meeting the builders, they send a team of two humans, a puppeteer and a kzin, eight-foot red-fur catlike alien. Ringworld is 180 million miles across, sun at center. But the expedition crashes, and crew face disastrously long trek.",
        availability: true
    }];*/
})();