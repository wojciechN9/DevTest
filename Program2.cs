using System;

namespace ConsoleApp13
{
    class Program
    {
        const double TaxRate = 0.2m;

        static void Main(string[] args)
        {
            Program p = new Program();

            Console.WriteLine(GetMessage());

            Console.WriteLine(p.GetGreating("Ashley"));

            var items = new [] { "item1", "item2", "item3 "};

            Console.WriteLine(items.Skip(1).First();

            var lineValue = 40 * TaxRate;

            Console.WriteLine("Line 1: {0}", lineValue);

            TaxRate = 0.4d;

            Decimal lineValue = 40 * TaxRate;

            Console.WriteLine("Line 2: {0}", lineValue);

            Main(null);
        }

        public void GetMessage()
        {
            return "Hello World";
        }

        public string GetGreating(string n1) => @"Hello, {n1}";
    }
}
