module App {
    "use strict";

    export class StudentService {

        private httpService: angular.IHttpService;
        private qService: angular.IQService;
        private authService: AuthService;

        static $inject: string[] = ["$http", "$q","AuthService"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, auth: AuthService) {
            this.httpService = $http;
            this.qService = $q;
            this.authService = auth;
        }

        Get() {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };
            var config: angular.IRequestShortcutConfig = { headers: { 'Authorization': "Bearer " + self.authService.AccountInfo.AccessToken } };
            self.httpService.get("/api/StudentQuery", config)
                .then(successCallback, errorCallback);
            return deffered.promise;
        }

        EmailExists(email: string) {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };

            self.httpService.get("/api/Student?email=" + email)
                .then(successCallback, errorCallback);
            return deffered.promise;
        }

        Save(data: Student): angular.IPromise<any> {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };

            self.httpService.post("/api/Student", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        }

    }
    angular.module("app").service("StudentService", StudentService);
}