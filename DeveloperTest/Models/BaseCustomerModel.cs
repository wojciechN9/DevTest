using System.ComponentModel.DataAnnotations;
using DeveloperTest.Database.Enums;

namespace DeveloperTest.Models
{
    public class BaseCustomerModel
    {
        [MinLength(5)]
        public string Name { get; set; }
        public CustomerType Type { get; set; }
    }
}
