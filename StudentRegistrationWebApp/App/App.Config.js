var App;
(function (App) {
    var AppConfig = (function () {
        function AppConfig($stateProvider, $urlRouterProvider) {
            this.stateProvider = $stateProvider;
            this.urlProvider = $urlRouterProvider;
            console.log('i m in appconfig.ts');
            $stateProvider
                .state("root", {
                abstract: true,
                url: "",
                template: "<div ui-view class=\"container-fluid slide\"></div>",
            })
                .state("root.home", {
                url: "/",
                templateUrl: "partials/home/home.html",
                controller: "HomeController",
                controllerAs: "std"
            })
                .state("root.signin", {
                url: "/signin",
                templateUrl: "partials/account/signin.html",
                controller: "SigninController",
                controllerAs: "st"
            })
                .state("root.student-entry", {
                url: "/student-entry",
                templateUrl: "partials/student/student-entry.html",
                controller: "StudentController",
                controllerAs: "std"
            })
                .state("root.student-list", {
                url: "/student-list",
                templateUrl: "partials/student/student-list.html",
                controller: "StudentQueryController",
                controllerAs: "std"
            });
        }
        AppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        return AppConfig;
    })();
    App.AppConfig = AppConfig;
    angular.module("app", ["ngResource", "ui.router"]);
    angular.module("app").config(AppConfig);
})(App || (App = {}));
//# sourceMappingURL=App.Config.js.map