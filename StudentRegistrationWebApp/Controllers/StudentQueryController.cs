using StudentService;
using StudentViewModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;


namespace StudentRegistrationWebApp.Controllers
{
    [Authorize]
    public class StudentQueryController : BaseController
    {
        RegistrationService regService;

        public StudentQueryController()
        {
            regService = new RegistrationService(db);
        }


        public IHttpActionResult Get()
        {
            try
            {
                List<StudentView> get = regService.GetAll();
                return Ok(get);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}