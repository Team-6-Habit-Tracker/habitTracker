
// selected habit settings page
let bigIcon = document.querySelector('#icon');
let selectedHabit = document.querySelector('.selected');

let addedHabits = [];
let habitIndex = [];
let frequency, lastHabitID, index;

let HabitSetting = function (id, title, frequency) {
    this.id = id;
    this.title = title;
    this.frequency = frequency;
}

// HABITS
const fas = "fas";
const training = 'fa-dumbbell';
const takingStairs = 'fa-walking';
const reading = 'fa-book';

const setupEventListeners_selectedHabitSettings = function() {

    document.querySelector('#add_habit').addEventListener('click', addHabit)
  
}

let loadHabit = function () {
    
    if (habit == 'habit_1'){
        bigIcon.classList.add(fas)
        bigIcon.classList.add(training)
    }
    selectedHabit.innerHTML = 'You selected ' + habit;  
}

let addHabit = function () {
    let newHabit;

    frequency = document.querySelector('#frequency').value;

    newHabit = new HabitSetting(lastHabitID, habit, frequency);
    addedHabits.push(newHabit);

    lastHabitID++;
    habitIndex.push(index);


    localStorage.setItem('habitIndex', JSON.stringify(habitIndex)); // array of all added habits 
    localStorage.setItem('lastID', JSON.stringify(lastHabitID)); // amount of added habits 
    localStorage.setItem('added', JSON.stringify(addedHabits)); // array with habit info

    window.location.href = "index.html"; // go to index
}

const retrieveLocalStorage_selectedHabitSettings = function () {
    
    if (JSON.parse(localStorage.getItem('selectedHabit'))) { 
        habit = JSON.parse(localStorage.getItem('selectedHabit'));
    };

    if (JSON.parse(localStorage.getItem('added'))) {
        addedHabits = JSON.parse(localStorage.getItem('added'));
    };

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


retrieveLocalStorage_selectedHabitSettings();
setupEventListeners_selectedHabitSettings();
loadHabit();