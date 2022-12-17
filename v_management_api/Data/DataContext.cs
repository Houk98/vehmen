using Microsoft.EntityFrameworkCore;
using v_management_api.Models;

namespace v_management_api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
            public DbSet<Driver> driver{ get; set; }
            public DbSet<User> User { get; set; }
    }
}
