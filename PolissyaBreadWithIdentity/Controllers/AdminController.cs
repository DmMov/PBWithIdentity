using PolissyaBreadWithIdentity.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PolissyaBreadWithIdentity.Controllers
{
    [Authorize(Roles = "admin")]
    public class AdminController : Controller
    {
        ProductsContext pc = new ProductsContext();
        StoriesContext sc = new StoriesContext();

        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetProducts()
        {
            var Products = from entity in pc.Products
                           select new
                           {
                               entity.Id,
                               entity.Name,
                               entity.Price,
                               entity.PackedPrice,
                               entity.Realization,
                               entity.Mass,
                               entity.CategoryId,
                               Category = entity.Category.Name
                           };
            return Json(Products, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddProduct(Product product)
        {
            product.Id = Guid.NewGuid().ToString();
            pc.Products.Add(product);
            pc.SaveChanges();
            return Json(product);
        }

        [HttpDelete]
        public ActionResult DeleteProduct(string id)
        {
            Product product = new Product { Id = id };

            pc.Entry(product).State = EntityState.Deleted;
            pc.SaveChanges();

            return Json(product);
        }

        public ActionResult GetTypes()
        {
            var Categories = from entity in pc.Categories
                        select new
                        {
                            entity.Id,
                            entity.Name,

                            Products = entity.Products.ToList()
                        };
            return Json(Categories, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddType(Category category)
        {
            category.Id = Guid.NewGuid().ToString();
            pc.Categories.Add(category);
            pc.SaveChanges();
            return Json(category);
        }

        [HttpDelete]
        public ActionResult DeleteType(string id)
        {
            Category category = new Category { Id = id };

            pc.Entry(category).State = EntityState.Deleted;
            pc.SaveChanges();

            return Json(category);
        }

        public ActionResult GetStories()
        {
            var Stories = from entity in sc.Stories
                           select new
                           {
                               entity.Id,
                               entity.Date,
                               entity.Text
                           };
            return Json(Stories, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddHistory(History history)
        {
            history.Id = Guid.NewGuid().ToString();
            sc.Stories.Add(history);
            sc.SaveChanges();
            return Json(history);
        }

        [HttpDelete]
        public ActionResult DeleteHistory(string id)
        {
            History history = new History { Id = id };
            sc.Entry(history).State = EntityState.Deleted;
            sc.SaveChanges();
            return Json(history);
        }
    }
}