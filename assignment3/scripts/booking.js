/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let costPerWeek = 0;
let daysSelected = [];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeColourDays() {
    let day = this.id;
    if (daysSelected.includes(day)) {
        // If day has already been selected
    } else {
        daysSelected.push(day);
        this.classList.add("clicked");
    }
    console.log(daysSelected);
}

document.getElementById('monday').addEventListener('click', changeColourDays);
document.getElementById('tuesday').addEventListener('click', changeColourDays);
document.getElementById('wednesday').addEventListener('click', changeColourDays);
document.getElementById('thursday').addEventListener('click', changeColourDays);
document.getElementById('friday').addEventListener('click', changeColourDays);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    daysSelected.forEach(function(value) {
        document.getElementById(value).classList.remove('clicked');
    });
    daysSelected = [];
    calculateRate();
    console.log(daysSelected);
}

document.getElementById('clear-button').addEventListener('click', clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeRateHalf() {
    costPerDay = 20;
    document.getElementById('half').classList.add('clicked');
    document.getElementById('full').classList.remove('clicked');
    calculateRate();
}

document.getElementById('half').addEventListener('click', changeRateHalf);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRateFull() {
    costPerDay = 35;
    document.getElementById('full').classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');
    calculateRate();
}

document.getElementById('full').addEventListener('click', changeRateFull);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateRate() {
    costPerWeek = costPerDay * daysSelected.length;
    document.getElementById('calculated-cost').innerHTML = costPerWeek;
}

