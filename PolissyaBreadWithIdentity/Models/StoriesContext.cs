using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PolissyaBreadWithIdentity.Models
{
    public class StoriesContext : DbContext
    {
        public DbSet<History> Stories { get; set; }
    }
}