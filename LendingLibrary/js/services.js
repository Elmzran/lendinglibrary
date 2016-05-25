(function () {
    angular.module("library")
    .factory("Data", ["$http", "$resource", function DataFactory($http, $resource) {
        return {
            resource: function () {
                return $resource("/api/Book/:id", {}, {});
                },
            http: function (method, specific, data) {
                if (specific == undefined)
                    specific = ""
                if (data == undefined)
                    return $http({ method: method, url: "api/Book/" + specific});
                else
                    return $http({ method: method, url: "api/Book/" + specific, data: data});
            }
        }
    }]);
}());