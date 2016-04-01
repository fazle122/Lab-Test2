using StudentModule;
using StudentService;
using StudentViewModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace StudentRegistrationWebApp.Controllers
{
    public class StudentController : BaseController
    {
        RegistrationService regService;

        public StudentController()
        {
            regService = new RegistrationService(db);
        }

        //public IHttpActionResult Get()
        //{
        //    try
        //    {
        //        List<StudentView> get = regService.GetAll();
        //        return Ok(get);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Content(HttpStatusCode.InternalServerError, ex.Message);
        //    }
        //}


        [System.Web.Http.HttpGet]
        public IHttpActionResult EmailExists(string email)
        {
            try
            {
                return Ok(regService.CheckEmail(email));
            }
            catch(Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError, ex.Message);
            }
        }




        public IHttpActionResult Post(Student student)
        {
            if(string.IsNullOrWhiteSpace(student.ID))
            {
                student.ID = Guid.NewGuid().ToString();
            }

            try
            {
                string id = regService.Save(student);
                return Ok(id);
            }
            catch (ArgumentException ex)
            {
                return Content(HttpStatusCode.BadRequest, ex.Message);
            }
            catch (Exception ex)
            {

                return Content(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}