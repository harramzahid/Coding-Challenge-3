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

// Task 3 

