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
let currentMonth = now.getMonth() + 1;
let currentYear = now.getFullYear();

btn.addEventListener("click", ageCalculator);


function ageCalculator() {  
    let birthDay = date.value;
    let birthMonth = month.value;
    let birthYear = year.value;
    if(isValidDate(birthYear, birthMonth, birthDay) || 
    error.call(date, 1, 31, dateError) || 
    error.call(month, 1, 12, monthError) || 
    error.call(year, 1900, currentYear, yearError) ||
    new Date(birthYear, birthMonth, birthDay).getTime() > new Date(currentYear, currentMonth, currentDay).getTime()){
        error.call(month, 1, 12, monthError);
        error.call(year, 1900, currentYear, yearError); 
        error.call(date, 1, 31, dateError);
        calculatedYears.innerHTML = "-";
        calculatedMonths.innerHTML = "-";
        calculatedDays.innerHTML = "-";        
        if(isValidDate(birthYear, birthMonth, birthDay) || error.call(date, 1, 31, dateError)){
            dateError.classList.remove("hidden"); 
            return;
         } else if(new Date(birthYear, birthMonth, birthDay).getTime() > new Date(currentYear, currentMonth, currentDay).getTime()){
            dateError.classList.remove("hidden");
            dateError.innerHTML = "*The date is in the future";
            return
        }
        else{
            dateError.classList.add("hidden");
        }
        return;
    } else{
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
    } 
}


function error(minData, maxData, errorData){
    if(this.value >= minData && this.value <= maxData){
        errorData.classList.add("hidden");        
        return false;
    } else {
        errorData.classList.remove("hidden"); 
        errorData.innerHTML = `*Value must be between ${minData} and ${maxData}` ;     
        return true;     
    }
}
function isValidDate(y, m, d) {
    let validDate = new Date(y, m, 0).getDate();
    let dateOfBirth = d;         
    return validDate + 1 <= dateOfBirth;
}

