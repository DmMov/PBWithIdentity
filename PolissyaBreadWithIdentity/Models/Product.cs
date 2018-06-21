using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PolissyaBreadWithIdentity.Models
{
    public class Product
    {
        public string Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }

        public decimal? Price { get; set; }

        public decimal? PackedPrice { get; set; }
        public int Mass { get; set; }
        public string Realization { get; set; }

        
        public string CategoryId { get; set; }
        public Category Category { get; set; }
    }
}