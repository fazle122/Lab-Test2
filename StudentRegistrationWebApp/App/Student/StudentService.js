var App;
(function (App) {
    "use strict";
    var StudentService = (function () {
        function StudentService($http, $q, auth) {
            this.$http = $http;
            this.$q = $q;
            this.httpService = $http;
            this.qService = $q;
            this.authService = auth;
        }
        StudentService.prototype.Get = function () {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            var config = { headers: { 'Authorization': "Bearer " + self.authService.AccountInfo.AccessToken } };
            self.httpService.get("/api/StudentQuery", config)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        StudentService.prototype.EmailExists = function (email) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.get("/api/Student?email=" + email)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        StudentService.prototype.Save = function (data) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.post("/api/Student", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        StudentService.$inject = ["$http", "$q", "AuthService"];
        return StudentService;
    })();
    App.StudentService = StudentService;
    angular.module("app").service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map