const year = document.getElementById("year");
const month = document.getElementById("month");
const date = document.getElementById("date");
const btn = document.getElementById("btn");
const calculatedYears = document.getElementById("years");
const calculatedMonths = document.getElementById("months");
const calculatedDays = document.getElementById("days");
const dateError = document.getElementById("date-error")
const monthError = document.getElementById("month-error")
const yearError = document.getElementById("year-error");

const now = new Date(); 
let currentDay = now.getDate();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

btn.addEventListener("click", ageCalculator);
btn.addEventListener("click", () => {
    error.call(year, 1900, currentYear, yearError);
    error.call(month, 1, 12, monthError);
    error.call(date, 1, 31, dateError);
});

function ageCalculator() {
    const dateOfBirth = new Date(year.value, month.value, date.value); 
    let birthDay = dateOfBirth.getDate();
    let birthMonth = dateOfBirth.getMonth() - 1;
    let birthYear = dateOfBirth.getFullYear();

    // if (!isValidDate(date.value, month.value, year.value)) {
    //     dateError.classList.remove("hidden");
    //     console.log(dateError);
    //     console.log(isValidDate(date.value, month.value, year.value));
    //     console.log(dateOfBirth);
        
        
    //     console.log(dateError.classList);
        
        
    //     console.log("Invalid date");
    //     return; 
    // } else {
    //     dateError.classList.add("hidden");
    // }

    // if(dateOfBirth.getTime() > now.getTime()){
    //     document.getElementById("error").classList.remove("hidden");
    //     return;   
    // } else{
    //     document.getElementById("error").classList.add("hidden");
    // }

    if(birthDay > currentDay){
        currentDay +=  new Date(currentYear, currentMonth, 0).getDate();
        currentMonth--
    }
    if(birthMonth > currentMonth) {
        currentYear--;
        currentMonth += 12;        
    }   

    calculatedYears.innerHTML = currentYear - birthYear;
    calculatedMonths.innerHTML = currentMonth - birthMonth;
    calculatedDays.innerHTML = currentDay - birthDay; 
    isValidDate();   
}



function error(minData, maxData, errorData){
    if(this.value >= minData && this.value <= maxData){
        errorData.classList.add("hidden");
    } else {
        errorData.classList.remove("hidden"); 
        errorData.innerHTML = `*value must be between ${minData} and ${maxData}`      
    }
}

year.addEventListener("keyup", () => {
    error.call(year, 1900, currentYear, yearError);
});
month.addEventListener("keyup", () => {
    error.call(month, 1, 12, monthError);
});
date.addEventListener("keyup", () => {
    error.call(date, 1, 31, dateError);
});


function isValidDate(d, m, y) {
    // let dateObj = new Date(y, m - 1, d);
    // let daysInMonth = new Date(y, m, 0).getDate();
    // return dateObj.getFullYear() === parseInt(y) &&
    //        dateObj.getMonth() === m - 1 &&
    //        dateObj.getDate() === parseInt(d) &&
    //        d <= daysInMonth;
    let validDate = new Date(year.value, month.value + 1, 0)
    console.log(validDate);
    
}
