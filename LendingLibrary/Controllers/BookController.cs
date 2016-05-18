using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LendingLibrary.Models;
using System.IO;

namespace LendingLibrary.Controllers
{
    public class BookController : ApiController
    {
        // GET: api/Book
        public string Get()
        {
            return File.ReadAllText("C:/Users/Jonathan Roosa/Documents/NASA/Projects/lendinglibrary/LendingLibrary/Models/book_data.json");
        }

        // GET: api/Book/5
        public IEnumerable<BookData> Get(int id)
        {
            BookData[] test = new BookData[1];
            test[0] = new BookData();
            test[0].Title = "Ubik";
            test[0].Author = "Philip K. Dick";
            test[0].Cover = "./img/books/ubik.png";
            test[0].Description = "Ubik is a 1969 science fiction novel by American writer Philip K. Dick. It is one of Dick's most acclaimed novels. It was chosen by Time magazine as one of the 100 greatest novels since 1923. In his review for Time, critic Lev Grossman described it as \"a deeply unsettling existential horror story, a nightmare you'll never be sure you've woken up from.\"\n\nThe novel takes place in the \"North American Confederation\" of 1992, where civilians regularly travel to the Moon, and psi phenomena are common. The novel's protagonist, Joe Chip, is a debt-ridden technician for Glen Runciter's \"prudence organization\", which employs people with the ability to block psychic powers (like an anti-telepath, preventing a telepath from reading a mind) to help enforce privacy. Runciter runs the company with the assistance of his deceased wife Ella, who is kept in a state of \"half-life\", a form of cryonic suspension that gives the deceased limited consciousness and the ability to communicate.";
            test[0].Availability = true;
            return test;
        }

        // POST: api/Book
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Book/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Book/5
        public void Delete(int id)
        {
        }
    }
}
