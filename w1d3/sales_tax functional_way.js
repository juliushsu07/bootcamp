"use strict";

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  let Bombardier = { totalSales: 0, totalTaxes: 0};
  let Telus = { totalSales: 0, totalTaxes: 0};
  let obj = {Telus: Telus, Bombardier: Bombardier};

  for(let data of salesData){
    switch (data.name){

      case "Telus":
        for(let saleIndex in data.sales){
          Telus.totalSales += data.sales[saleIndex];
          switch (data.province){
            case "AB":
              Telus.totalTaxes += data.sales[saleIndex] * taxRates.AB;
              break;
            case "BC":
              Telus.totalTaxes += data.sales[saleIndex] * taxRates.BC;
              break;
            case "SK":
              Telus.totalTaxes += data.sales[saleIndex] * taxRates.SK;
              break;
          }
        }

        break;

      case "Bombardier":
        for(let saleIndex in data.sales){
          Bombardier.totalSales += data.sales[saleIndex];
          switch (data.province){
            case "AB":
              Bombardier.totalTaxes += data.sales[saleIndex] * taxRates.AB;
              break;
            case "BC":
              Bombardier.totalTaxes += data.sales[saleIndex] * taxRates.BC;
              break;
            case "SK":
              Bombardier.totalTaxes += data.sales[saleIndex] * taxRates.SK;
              break;
          }
        }
        break;
    }
  }
  console.log(obj);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/