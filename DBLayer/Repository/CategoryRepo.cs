using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLayer.Repository
{
    public class CategoryRepo : DbSet<Category>, IDisposable
    {
        DbContext dbCon = new MyForumEntities();
        public CategoryRepo()
        {

        }

        public void Dispose()
        {
            dbCon.SaveChanges();
        }
    }
}
