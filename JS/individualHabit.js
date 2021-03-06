let bigIcon = document.querySelector('#icon');
let selectedHabit = document.querySelectorAll('.selected');
let color = document.querySelector('.color');

let habit, doneHabitID, ID;

let addedHabits = [];
let habitIndex = [];
let done = [];
let frequency, lastHabitID, index;

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

    chart.render();
}

let loadHabit = function() {
    let compare = 0;

    habit = addedHabits[ID].title;

    if (habit == 'Training') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(training);
        color.classList.add('bgtraining');
      } else if (habit == 'Taking the Stairs') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(takingStairs);
        color.classList.add('bgtakingTheStairs');
      } else if (habit == 'Reading') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(reading);
        color.classList.add('bgreading');
      } else if (habit == 'Studying') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(study);
        color.classList.add('bgstudy');
      } else if (habit == 'Eating Healthy') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(eatHealthy);
        color.classList.add('bgeatHealthy');
      } else if (habit == 'Go to Bed Early') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(goToBedEarly);
        color.classList.add('bggoToBedEarly');
      } else if (habit == 'Wake up Early') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(wakeUpEarly);
        color.classList.add('bgwakeUpEarly');
      } else if (habit == 'No Social Media') {
        bigIcon.classList.add('fab');
        bigIcon.classList.add(lessSocialMedia);
        color.classList.add('bgnoSocialMedia');
      } else if (habit == 'No Smoking') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(noSmoking);
        color.classList.add('bgnoSmoking');
      } else if (habit == 'Meditation') {
        bigIcon.classList.add(fas);
        bigIcon.classList.add(meditation);
        color.classList.add('bgmeditation');
      };

    if (addedHabits[ID].totalClicks < addedHabits[ID].frequency) {
        let left = addedHabits[ID].frequency - addedHabits[ID].totalClicks;
        document.querySelector('#left').innerHTML = 'You need to complete the task ' + left + ' more times to reach your goal of ' + addedHabits[ID].frequency + '/week.';
    } else {
        if (addedHabits[ID].frequency == 1) {
            document.querySelector('#left').innerHTML = 'You have completed the task ' + addedHabits[ID].frequency + ' time. You have reached your GOAL!';
        } else {
            document.querySelector('#left').innerHTML = 'You have completed the task ' + addedHabits[ID].frequency + ' times. You have reached your GOAL!';
        };
    };

    // Set values for different days
    for (let i = 0; i < 7; i++) {
        chart.options.data[0].dataPoints[i].y = addedHabits[ID].clicked[i];
    };

    selectedHabit.forEach(element => element.innerHTML = habit);
};

const retrieveLocalStorage_individualHabit = function() {

    if (JSON.parse(localStorage.getItem('added'))) {
        addedHabits = JSON.parse(localStorage.getItem('added'));
    };

    ID = JSON.parse(localStorage.getItem('doneHabitID'));
};


retrieveLocalStorage_individualHabit();
// setupEventListeners_individualHabit();
loadHabit();
setupChart();