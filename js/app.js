// Web application code for the books.
(function () {
    // Main program module
    var app = angular.module("library", []);

    // Controller for book data
    app.controller("BookController", function () {
        this.bookData = books;
    });

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

    var books = [{
        title: "Ubik",
        author: "Philip K. Dick",
        cover: "./img/books/ubik.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis semper ornare. Aliquam at luctus eros, in malesuada orci. Mauris a vulputate mauris. Pellentesque massa massa, auctor eget sodales et, laoreet sed diam. Integer luctus, mauris id commodo pretium, augue neque dictum nunc, at ornare libero sem et nisl. Donec rutrum nibh at dignissim auctor. Sed egestas justo nec urna elementum condimentum. Nulla suscipit hendrerit dapibus. Etiam tempor ipsum nec urna ultricies, placerat aliquam arcu luctus. Integer ornare pretium ligula in tempus. Nunc rutrum elementum semper. Suspendisse in felis et purus blandit condimentum at quis lorem. Nulla interdum feugiat tortor sed ultricies. Pellentesque iaculis aliquet arcu.",
    }, {
        title: "Ubik: The Screenplay",
        author: "Philip K. Dick",
        cover: "./img/books/ubik_screenplay.png"
    }, {
        title: "Rendezvous with Rama",
        author: "Arthur C. Clarke",
        cover: "./img/books/rendezvous_with_rama.png"
    }, {
        title: "Ringworld",
        author: "Larry Niven",
        cover: "./img/books/ringworld.png"
    }];
})();