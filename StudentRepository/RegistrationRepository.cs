using StudentModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentRepository
{
    public class RegistrationRepository :BaseRepository
    {
        public RegistrationRepository(StudentDBContext db) : base(db)
        {

        }

        public IQueryable<Student> GetAll()
        {
            return Db.Students.AsQueryable();
        }

        public String Add(Student student)
        {
            Student add = Db.Students.Add(student);
            Db.SaveChanges();
            return add.ID;
        }

        public bool CheckEmail(string email)
        {
            return Db.Students.Any(x => x.Email == email);
        }
    }
}
