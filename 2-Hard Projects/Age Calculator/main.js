let form = document.querySelector("form");
let input = document.querySelector("form input[type='date']");
let result = document.querySelector(".result");
const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


form.addEventListener("submit", function (e) {
    let daysLived, monthsLived, yearsLived;
    e.preventDefault();
    let now = new Date();
    let inputDate = new Date(input.value);
    let currentTime = {
        days: now.getDate(),
        months: now.getMonth() + 1,
        years: now.getFullYear()
    };
    let birth = {
        days: inputDate.getDate(),
        months: inputDate.getMonth() + 1,
        years: inputDate.getFullYear()
    };

    // Not Valid Date Validation
    if (isNaN(inputDate.getTime())) { return result.innerHTML = "Please Enter A Valid Birth"; }

    // Not Born Validation
    if (inputDate > now) return result.innerHTML = "Not Born Yet";

    // Leap Years Validation
    if ((birth.years % 4 === 0 && birth.years % 100 !== 0) || (birth.years % 400 === 0)) {
        daysOfMonths[1] = 29;
    } else {
        daysOfMonths[1] = 28;
    }

    // Years Calculation
    if (currentTime.years >= birth.years) {
        yearsLived = currentTime.years - birth.years;
    }
    // Months Calculation
    if (currentTime.months >= birth.months) {
        monthsLived = currentTime.months - birth.months;
    } else { // confusion point
        yearsLived--;
        monthsLived = 12 + currentTime.months - birth.months;
    }
    // Days Calculation 
    if (currentTime.days >= birth.days) {
        daysLived = currentTime.days - birth.days;
    } else { // confusion point
        monthsLived--;
        // Days of previous Month Calculation
        let indexOfPrevious = birth.months - 2;
        if (indexOfPrevious < 0) indexOfPrevious = 11; // Dec
        daysLived = daysOfMonths[indexOfPrevious] + currentTime.days - birth.days;


        if (monthsLived < 0) { // if birth month = current month
            monthsLived = 11;
            yearsLived--;
        }
    }
    return result.innerHTML = `${yearsLived} Years, ${monthsLived} Months, ${daysLived} Days`;

});