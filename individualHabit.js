let bigIcon = document.querySelector('#icon');
let selectedHabit = document.querySelectorAll('.selected');

let habit, doneHabitID, ID;

let addedHabits = [];
let habitIndex = [];
let done = [];
let clicks = [];
let frequency, lastHabitID, index;


let HabitSetting = function(id, title, frequency, done) {
    this.id = id;
    this.title = title;
    this.frequency = frequency;
    this.done = done;
}

// HABITS
const fas = "fas";
const training = 'fa-dumbbell';
const takingStairs = 'fa-walking';
const reading = 'fa-book';
const study = 'fa-laptop-code';
const eatHealthy = 'fa-carrot';
const goToBedEarly = 'fa-bed';
const wakeUpEarly = 'fa-clock';
const lessSocialMedia = 'fa-instagram';
const noSmoking = 'fa-smoking-ban';
const meditation = 'fa-om';

// const setupEventListeners_individualHabit = function() {


// }

let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {

    },
    subtitles: [{
        text: 'times completed per day',
        fontSize: 16
    }],
    axisY: {
        suffix: ' times',
        scaleBreaks: {
            customBreaks: [{
                startValue: 0,
                endValue: 0
            }]
        }
    },
    data: [{
        // type: "column",
        dataPoints: [
            { label: "Monday", y: 0 },
            { label: "Tuesday", y: 0 },
            { label: "Wednesday", y: 0 },
            { label: "Thursday", y: 0 },
            { label: "Friday", y: 0 },
            { label: "Saturday", y: 0 },
            { label: "Sunday", y: 0 }
        ]
    }]
});

let setupChart = function() {

    chart.options.axisY.maximum = 10;
    chart.options.axisY.minimum = 0;
    chart.options.axisY.interval = 1;
    // chart.options.axisY.scaleBreaks.customBreaks.color = 'black';
    // console.log(chart.options.axisY.scaleBreaks.customBreaks.color);
    // chart.options.axisY.scaleBreaks.customBreaks.lineThinkness = 3;
    // chart.options.axisY.scaleBreaks.customBreaks.type = 'straight';

    chart.render();
}

let loadHabit = function() {
    let compare = 0;

    habit = addedHabits[ID].title;

    if (habit == 'Training') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(training);
    } else if (habit == 'Taking the Stairs') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(takingStairs);
    } else if (habit == 'Reading') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(reading);
    } else if (habit == 'Studying') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(study);
    } else if (habit == 'Eating Healthy') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(eatHealthy);
    } else if (habit == 'Go to Bed Early') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(goToBedEarly);
    } else if (habit == 'Wake up Early') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(wakeUpEarly);
    } else if (habit == 'No Social Media') {
        bigIcon.classList.add('fab');
        bigIcon.classList.add(lessSocialMedia);
    } else if (habit == 'No Smoking') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(noSmoking);
    } else if (habit == 'Meditation') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(meditation);
    };

    for (let j = 0; j < 7; j++) {
        if (addedHabits[ID].doneDay[j] == true) {
            compare++;
        }
        clicks.push(addedHabits[ID].clicked[j]);
        console.log('compare ' + compare)
    }

    if (compare < addedHabits[ID].frequency) {
        let left = addedHabits[ID].frequency - compare;
        document.querySelector('#left').innerHTML = 'You need to complete the task ' + left + ' more times to reach your goal';
    } else {
        document.querySelector('#left').innerHTML = 'You have completed the tast ' + addedHabits[ID].frequency + ' times. You have reached your GOAL!';
    }

    let end = addedHabits[ID].frequency;
    end++;
    end++;
    chart.options.axisY.scaleBreaks.customBreaks[0].startValue = addedHabits[ID].frequency;
    chart.options.axisY.scaleBreaks.customBreaks[0].endValue = end;
    // chart.options.axisY.scaleBreaks.customBreaks[0].startValue = 6;
    // chart.options.axisY.scaleBreaks.customBreaks[0].endValue = 8;
    console.log('start: ' + chart.options.axisY.scaleBreaks.customBreaks[0].startValue)
    console.log('end: ' + chart.options.axisY.scaleBreaks.customBreaks[0].endValue)

    // Set values for different days
    for (let i = 0; i < 7; i++) {
        chart.options.data[0].dataPoints[i].y = clicks[i];
    };

    selectedHabit.forEach(element => element.innerHTML = habit.toUpperCase());


}

const retrieveLocalStorage_individualHabit = function() {

    if (JSON.parse(localStorage.getItem('added'))) {

        addedHabits = JSON.parse(localStorage.getItem('added'));
    };

    ID = JSON.parse(localStorage.getItem('doneHabitID'));

    if (JSON.parse(localStorage.getItem('lastID'))) {
        lastHabitID = JSON.parse(localStorage.getItem('lastID'));
    } else {
        lastHabitID = 0; // if it is the first habit 
    }

    if (JSON.parse(localStorage.getItem('habitIndex'))) {
        habitIndex = JSON.parse(localStorage.getItem('habitIndex'));
    }


    if (JSON.parse(localStorage.getItem('index'))) {
        index = JSON.parse(localStorage.getItem('index'));
    }
};


retrieveLocalStorage_individualHabit();
// setupEventListeners_individualHabit();
loadHabit();
setupChart();