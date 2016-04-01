module App {
    export class StudentQueryController {

        Students: Student[];

        private studentService: StudentService;
        static $inject = ["StudentService"];

        constructor(studentSvc: StudentService) {
            console.log("This is Student Query Controller");
            this.studentService = studentSvc;
            this.Students = [];
            this.Get();
        }

        Get() {
            var self = this;

            var successCallback = result => {
                self.Students = result.data as Student[];
            };
            var errorCallback = error => {
                console.log(error);
            };

            self.studentService.Get()
                .then(successCallback, errorCallback);
        }

        //Get() {
        //    var self = this;
        //    console.log("Here 1");
        //    this.studentService.Get()
        //        .then((result: any) => { console.log("Here 3"); self.Students = result.data as Student[]; },
        //        error => { alert(error); });
        //}
    }

    angular.module("app").controller("StudentQueryController", StudentQueryController);
}