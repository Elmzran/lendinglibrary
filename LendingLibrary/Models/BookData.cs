using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LendingLibrary.Models
{
    public class BookData
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Cover { get; set; }
        public string Description { get; set; }
        public string Borrower { get; set; }
        public bool Availability { get; set; }
    }
}