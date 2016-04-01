using StudentModule;
using StudentRepository;
using StudentViewModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentService
{
    public class RegistrationService : BaseService
    {
        RegistrationRepository registrationRepo;
        CityRepository cityRepo;

        public RegistrationService(StudentDBContext db):base(db)
        {
            registrationRepo = new RegistrationRepository(dbContext);
            cityRepo = new CityRepository(dbContext);
        }

        public List<StudentView> GetAll()
        {
            IQueryable<Student> get = registrationRepo.GetAll();
            var stdView = get.ToList().Select(x => new StudentView(x)).ToList();
            return stdView;
        }

        public string Save(Student student)
        {
            bool checkCity = cityRepo.CheckCity(student.City);
            if(!checkCity)
            {
                throw new ArgumentException("City doesn't exists");
            }
            return registrationRepo.Add(student);
        }

        public bool CheckEmail(string email)
        {
            return registrationRepo.CheckEmail(email);
        }
    }
}
