using StudentModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentRepository
{
    public class BaseRepository
    {
        public StudentDBContext Db { get; set; }

        protected BaseRepository(StudentDBContext db)
        {
            this.Db = db;
        }
    }
}
