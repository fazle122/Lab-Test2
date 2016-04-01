using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentModule
{
    public class StudentDBContext : DbContext
    {
        public StudentDBContext() : base("StudentRegContext")
        {

        }

        public DbSet<Student> Students { get; set; }
        public DbSet<City> Cities { get; set; }
    }
}
