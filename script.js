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

    
    
    console.log(isValidDate(birthYear, birthMonth, birthDay));
    console.log(error.call(month, 1, 12, monthError));
    console.log(error.call(year, 1900, currentYear, yearError)); 
    console.log(error.call(date, 1, 31, dateError));
    
    
    if(isValidDate(birthYear, birthMonth, birthDay) || error.call(date, 1, 31, dateError) || error.call(month, 1, 12, monthError) || error.call(year, 1900, currentYear, yearError) ){
        calculatedYears.innerHTML = "-";
        calculatedMonths.innerHTML = "-";
        calculatedDays.innerHTML = "-";        
        if(isValidDate(birthYear, birthMonth, birthDay) || error.call(date, 1, 31, dateError)){
            dateError.classList.remove("hidden"); 
            return;
        } else{
            dateError.classList.add("hidden");
        }
        return;
    } else{
        calculatedYears.innerHTML = currentYear - birthYear;
        calculatedMonths.innerHTML = currentMonth - birthMonth;
        calculatedDays.innerHTML = currentDay - birthDay;       
    }
    // if(isValidDate(birthYear, birthMonth, birthDay)){
    //     dateError.classList.remove("hidden");        
    //     calculatedYears.innerHTML = "-";
    //     calculatedMonths.innerHTML = "-";
    //     calculatedDays.innerHTML = "-";
        
    // } else {
    //     dateError.classList.add("hidden");
    // }
    // if(error.call(year, 1900, currentYear, yearError) || error.call(month, 1, 12, monthError)){
    //     calculatedYears.innerHTML = "-";
    //     calculatedMonths.innerHTML = "-";
    //     calculatedDays.innerHTML = "-";
    // } 
    
    // if(!isValidDate(birthYear, birthMonth, birthDay) && !error.call(year, 1900, currentYear, yearError) && !error.call(month, 1, 12, monthError)){
    //     calculatedYears.innerHTML = currentYear - birthYear;
    //     calculatedMonths.innerHTML = currentMonth - birthMonth;
    //     calculatedDays.innerHTML = currentDay - birthDay;
    // }
    if(birthDay > currentDay){
        currentDay +=  new Date(currentYear, currentMonth, 0).getDate();
        currentMonth--
    }
    if(birthMonth > currentMonth) {
        currentYear--;
        currentMonth += 12;        
    }  
}



function error(minData, maxData, errorData){
    if(this.value >= minData && this.value <= maxData){
        errorData.classList.add("hidden");
        console.log("no error");
        
        return false;
    } else {
        errorData.classList.remove("hidden"); 
        errorData.innerHTML = `*value must be between ${minData} and ${maxData}` ;
        console.log("error");
        
        return true;     
    }
}

function isValidDate(y, m, d) {
    let validDate = new Date(y, m, 0).getDate();
    let dateOfBirth = d;     
    console.log(dateOfBirth);
    console.log(validDate + 1);
    console.log(validDate + 1 <= dateOfBirth);
    
    
    return validDate + 1 <= dateOfBirth;
}

