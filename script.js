// Variables for birthday inputs (input fields for year, month, day)
const year = document.getElementById("year");
const month = document.getElementById("month");
const date = document.getElementById("date");

// Variable for the submit button
const btn = document.getElementById("btn");

// Variables for displaying results (calculated age in years, months, and days)
const calculatedYears = document.getElementById("years");
const calculatedMonths = document.getElementById("months");
const calculatedDays = document.getElementById("days");

// Variables for displaying error messages
const dateError = document.getElementById("date-error")
const monthError = document.getElementById("month-error")
const yearError = document.getElementById("year-error");

// Get the current date (today's date)
const now = new Date(); 
let currentDay = now.getDate();
let currentMonth = now.getMonth() + 1;
let currentYear = now.getFullYear();

// Add event listener to the submit button to trigger the ageCalculator function on click
btn.addEventListener("click", ageCalculator);

// Main function to calculate the age based on the provided birthday
function ageCalculator() {  
    let birthDay = date.value;  // Get day value from input
    let birthMonth = month.value; // Get month value from input
    let birthYear = year.value;  // Get year value from input

    // Validate if the date is correct and check for errors
    if(isValidDate(birthYear, birthMonth, birthDay) ||  // Validate date logic
    error.call(date, 1, 31, dateError) ||               // Validate day range (1-31)
    error.call(month, 1, 12, monthError) ||             // Validate year range (1900 to current year)
    error.call(year, 1900, currentYear, yearError) ||
    new Date(birthYear, birthMonth, birthDay).getTime() > new Date(currentYear, currentMonth, currentDay).getTime()){  // Check if the birth date is in the future
         // Trigger the error messages for invalid month and year
        error.call(month, 1, 12, monthError);
        error.call(year, 1900, currentYear, yearError); 
        // Preventing displaying the false date month and year
        calculatedYears.innerHTML = "-";
        calculatedMonths.innerHTML = "-";
        calculatedDays.innerHTML = "-";     

         // If the day is invalid, display an error message
        if(error.call(date, 1, 31, dateError)){
            error.call(date, 1, 31, dateError);
           
        // If the day is greater than the maximum valid date of the month
         } else if(isValidDate(birthYear, birthMonth, birthDay)){
            dateError.classList.remove("hidden"); 
            dateError.innerHTML = `This month has only ${new Date(birthYear, birthMonth, 0).getDate()} days`;
          
         // If the birthdate is in the future
         } else if(new Date(birthYear, birthMonth, birthDay).getTime() > new Date(currentYear, currentMonth, currentDay).getTime()){
            dateError.classList.remove("hidden");
            dateError.innerHTML = "*The date is in the future";

        // Hide the date error if everything it's valid
        } else {
            dateError.classList.add("hidden");
        }
        return;

        // If the date is valid, calculate the age
    } else{
        // Adjust the current date if the birth date is greater than today's date
        if(birthDay > currentDay){
            currentDay +=  new Date(currentYear, currentMonth, 0).getDate(); // Add the days of the previous month
            currentMonth--; // Decrease the month by 1
        }
        // Adjust the current month if the birth month is greater than the current month
        if(birthMonth > currentMonth) {
            currentYear--;  // Decrease the year by 1
            currentMonth += 12;   // Add 12 months to the current month    
        } 
        // Calculate the age and display it
        calculatedYears.innerHTML = currentYear - birthYear;     // Years difference
        calculatedMonths.innerHTML = currentMonth - birthMonth;  // Months difference
        calculatedDays.innerHTML = currentDay - birthDay;        // Days difference
    } 
}

// Function to validate input ranges (day, month, year) and show error messages
function error(minData, maxData, errorData){
    // If the input value is within the valid range
    if(this.value >= minData && this.value <= maxData){
        errorData.classList.add("hidden");  // Hide error message if valid       
        return false;   // No error
    } else {
         // Show error message if the input is invalid
        errorData.classList.remove("hidden"); 
        errorData.innerHTML = `*Value must be between ${minData} and ${maxData}` ;     
        return true;   // Error present
    }
}


// Function to check if the provided date is valid for the given month/year
function isValidDate(y, m, d) {
    let validDate = new Date(y, m, 0).getDate();  // Get the last day of the month
    let dateOfBirth = d;                          // Get the day of birth from input
    return validDate + 1 <= dateOfBirth;          // Check if the day exceeds the valid date for the month
}

