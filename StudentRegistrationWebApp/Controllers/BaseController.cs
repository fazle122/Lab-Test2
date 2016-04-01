using StudentModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace StudentRegistrationWebApp.Controllers
{
    public class BaseController : ApiController
    {
        protected StudentDBContext db;

        public BaseController()
        {
            db = new StudentDBContext();
        }
    }
}