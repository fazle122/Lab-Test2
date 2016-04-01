// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var AccountInfo = (function () {
        function AccountInfo() {
        }
        return AccountInfo;
    })();
    App.AccountInfo = AccountInfo;
    var AuthService = (function () {
        //static $inject: string[] = ["localStorageService"];
        function AuthService() {
            this.AccountInfo = new AccountInfo();
            //this.localStorageService = localStorageService;
        }
        return AuthService;
    })();
    App.AuthService = AuthService;
    angular.module("app").service("AuthService", AuthService);
})(App || (App = {}));
//# sourceMappingURL=AuthService.js.map