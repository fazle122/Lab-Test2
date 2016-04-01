module App {
    export class HomeController {

        constructor() {
            console.log('This is from home controller');
        }

    }

    angular.module("app").controller("HomeController", HomeController);

}