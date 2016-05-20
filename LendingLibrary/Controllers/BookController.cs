using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LendingLibrary.Models;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace LendingLibrary.Controllers
{
    public class BookController : ApiController
    {
        // Book data
        private static List<BookData> data = new List<BookData>();

        // GET: api/Book
        public IEnumerable<BookData> Get()
        {
            data = JsonConvert.DeserializeObject<List<BookData>>(File.ReadAllText("C:/Users/Jonathan Roosa/Documents/NASA/Projects/lendinglibrary/LendingLibrary/Models/book_data.json"));
            return data;
        }

        // GET: api/Book/5
        public BookData Get(int id)
        {
            return data[id];
        }

        // POST: api/Book
        [HttpPost]
        public void Post([FromBody]BookData[] value)
        {
            File.WriteAllText("C:/Users/Jonathan Roosa/Documents/NASA/Projects/lendinglibrary/LendingLibrary/Models/book_data.json", JsonConvert.SerializeObject(value));
        }

        // PUT: api/Book/5
        public void Put(int id, [FromBody]BookData value)
        {
            if (id < data.Count)
                data[id] = value;
            else
                data.Add(value);
            File.WriteAllText("C:/Users/Jonathan Roosa/Documents/NASA/Projects/lendinglibrary/LendingLibrary/Models/book_data.json", JsonConvert.SerializeObject(data));
        }

        // DELETE: api/Book/5
        public void Delete(int id)
        {
        }
    }
}
