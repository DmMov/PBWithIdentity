using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PolissyaBreadWithIdentity.Models
{
    public class Category
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public ICollection<Product> Products { get; set; }

        public Category()
        {
            Products = new List<Product>();
        }

    }
}