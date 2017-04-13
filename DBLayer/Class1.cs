using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBLayer
{
    public static class RepositoryFactory
    {
        
        //public static DbSet<T> GetReposiroty<T>() where T : class
        //{
        //    var className = typeof(T).Name;
        //    switch (className)
        //    {
        //        case "Category":
        //            return new DBLayer.Repository.CategoryRepo();
        //            break;
        //        default:
        //            break;
        //    }
        //}

        //public IQueryable<T> GetAll<T>() where T : class
        //{
        //    using (var context = new MyForumEntities())
        //    {
        //        return context.Set<T>().AsQueryable();
        //    }
        //}

        //public IQueryable<T> Get<T>(Func<T, bool> whereClause) where T : class
        //{
        //    using (var context = new MyForumEntities())
        //    {
        //        return context.Set<T>().Where(whereClause).AsQueryable() ;
        //    }
        //}

        //public T Find<T>(int id) where T : class
        //{
        //    using (var context = new MyForumEntities())
        //    {
        //        return context.Set<T>().Find(id);
        //    }
        //}

        //public int Update<T>(T entity) where T : class
        //{
        //    using (var context = new MyForumEntities())
        //    {
        //        context.Set<T>().Add(entity);
        //        return context.SaveChanges();
        //    }
        //}

        //public void Delete<T>(int id) where T : class
        //{
        //    using (var context = new MyForumEntities())
        //    {
        //        var obj = context.Set<T>().Find(id);                
        //        context.Set<T>().Remove(obj);
        //        context.SaveChanges();
        //    }
        //}
    }
}
