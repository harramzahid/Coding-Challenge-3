// Coding Challenge 3
// Task 1 create a function to get average sales data
let sales = [ 100, 300, 400] //we are using this as an example
// function - declaration
function calculateaveragesales( function sumArray(arr) {
    return arr.reduce((sum, sales)) => sum + sales;
    let averagesales= sales/sales.length;
    return averagesales;
}
console.log("average sales:"{calculateaveragesales(sales)});
//Task 2 create a function to determine performance rating
let averagsales = calculateaveragesales(sales);
function determineperformancerating(averagesales){
    if (averagesales > 10000)
        return "excellent";
    else if (averagesales >=7000 && <=10000)
        return " Good "
    else if (averagesales>=4000 && <= 7000)
        return " satisfactory "
    if (averagesales < 4000)
        return "Needs Improvement"
}
console.log("performance rating:", determineperformancerating)

// Task 3 Create a function to identify top and bottom performers
let employees = [
    { name:Blob, sales:400},
    { name:jonas, sales: 300},
];
// sorting the top and bottom performers
employees.sort((a, b) => a.sales - b.sales);
console.log(salesperson);

function topandbottomperformers(salesperson){
  if (salesperson a > b)
    return "Top performer"
  else if (salesperson b > a)  
    return "Bottom Performer"
}
console.log("top and bottom performer:", topandbottomperformers)

// Task 4 generatePerformanceReport
let calculateaveragesales = average sales;
let determineperformancerating = performance rating;
let findtopandbottomperformers = top and bottom performer;

function generateperformancereport (salesdatas) {
calculateaveragesales, determineperformancerating, findtopandbottomperformers;
return " average sales", "performance rating", "top and bottom performer"
};

console.log(performancereport)



