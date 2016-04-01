using StudentModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentService
{
    public class BaseService
    {
        protected StudentDBContext dbContext;

        public BaseService(StudentDBContext db)
        {
            dbContext = db;
        }
    }
}
