(function () {
    angular.module("library")
    .factory("Data", ["$http", function DataFactory($http) {
        return {
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