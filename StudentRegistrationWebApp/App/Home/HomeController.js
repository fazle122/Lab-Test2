var App;
(function (App) {
    var HomeController = (function () {
        function HomeController() {
            console.log('This is from home controller');
        }
        return HomeController;
    })();
    App.HomeController = HomeController;
    angular.module("app").controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map