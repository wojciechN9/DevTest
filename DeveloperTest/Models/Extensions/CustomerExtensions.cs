using DeveloperTest.Database.Models;

namespace DeveloperTest.Models.Extensions
{
    public static class CustomerExtensions
    {
        public static CustomerModel ToModel(this Customer customer)
        {
            return customer != null
                ? new CustomerModel
                {
                    CustomerId = customer.CustomerId,
                    Name = customer.Name,
                    Type = customer.Type
                }
                : null;
        }
    }
}
