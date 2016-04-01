using StudentModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentViewModule
{
    public class StudentView
    {
        public StudentView(Student student)
        {
            Name = student.Name;
            Phone = student.Phone;
            Email = student.Email;
            City = student.City;
            Address = student.Address;
        }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
    }
}
