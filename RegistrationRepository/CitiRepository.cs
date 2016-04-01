using StudentModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistrationRepository
{
    public class CitiRepository :BaseRepository
    {
        public CitiRepository(StudentDBContext db) : base(db)
        {

        }

        public IQueryable<City> GetAll()
        {
            return Db.Cities.AsQueryable();
        }

        public bool CheckCity(String city)
        {
            return Db.Cities.Any(x => x.Name == city);
        }
    }
}
