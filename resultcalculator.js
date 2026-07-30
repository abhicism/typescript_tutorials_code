"use strict";
// Function to calculate average of given marks
function calculateAverage(...marks) {
    // Initialize total to store sum of marks
    let total = 0;
    // Loop through each mark in the array
    for (const mark of marks) {
        total += mark; // Add each mark to total
    }
    // Return the average (total divided by number of marks)
    return total / marks.length;
}
// Call the function with multiple values
const average = calculateAverage(80, 90, 75, 95);
// Print the result to console
console.log("Average:", average);
