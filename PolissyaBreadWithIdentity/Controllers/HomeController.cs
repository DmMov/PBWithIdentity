using PolissyaBreadWithIdentity.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PolissyaBreadWithIdentity.Controllers
{
    public class HomeController : Controller
    {
        ProductsContext pc = new ProductsContext();
        StoriesContext sc = new StoriesContext();

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
                               entity.Image,
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

        public ActionResult GetCategories()
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
    }
}