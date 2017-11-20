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

  let totalSales = 0;
  let totalTaxes = 0;

  let Bombardier = { totalSales, totalTaxes};
  let Telus = { totalSales, totalTaxes};
  let obj = {Telus, Bombardier};

  for(data of salesData){

    let totalSales = 0;
    let totalTaxes = 0;

    switch (data.name){

      case "Telus":
        for(saleIndex in data.sales){



          Telus.totalSales += data.sales[saleIndex];
          // console.log(`Telus: ${Telus.totalSales}`);
          // switch (data.province){
          //   case "AB":
          //     Telus.totalTaxes += data.sales[saleIndex] * taxRates.AB;
          //   case "BC":
          //     Telus.totalTaxes += data.sales[saleIndex] * taxRates.BC;
          //   case "SK":
          //     Telus.totalTaxes += data.sales[saleIndex] * taxRates.SK;
          // }
        }

      case "Bombardier":

        for(saleIndex in data.sales){
          // console.log(data.name);
          Bombardier.totalSales += data.sales[saleIndex];
          // console.log(saleIndex, Bombardier.totalSales);
          // switch (data.province){
          //   case "AB":
          //     Bombardier.totalTaxes += data.sales[saleIndex] * taxRates.AB;
          //   case "BC":
          //     Bombardier.totalTaxes += data.sales[saleIndex] * taxRates.BC;
          //   case "SK":
          //     Bombardier.totalTaxes += data.sales[saleIndex] * taxRates.SK;
          // }
        }
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