// selected habit settings page
let bigIcon = document.querySelector('#icon');
let selectedHabit = document.querySelector('.selected');

let addedHabits = [];
let habitIndex = [];
let doneDay = [];
let clicked = [];
let totalClicks = 0;
let frequency, lastHabitID, index;

let HabitSetting = function (
  id,
  title,
  frequency,
  doneDay,
  clicked,
  totalClicks
) {
  this.id = id;
  this.title = title;
  this.frequency = frequency;
  this.doneDay = doneDay;
  this.clicked = clicked;
  this.totalClicks = totalClicks;
};

// HABITS
const fas = 'fas';
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

const setupEventListeners_selectedHabitSettings = function () {
  document.querySelector('#add_habit').addEventListener('click', addHabit);
};

let color = document.querySelector('.color');

let loadHabit = function () {
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
  }

  selectedHabit.innerHTML = 'You selected ' + habit;
};

let addHabit = function () {
  let newHabit;

  frequency = document.querySelector('#frequency').value;

  for (let i = 0; i < 7; i++) {
    doneDay[i] = false;
    clicked[i] = 0;
  }

  newHabit = new HabitSetting(
    lastHabitID,
    habit,
    frequency,
    doneDay,
    clicked,
    totalClicks
  );
  addedHabits.push(newHabit);

  lastHabitID++;
  habitIndex.push(index);

  localStorage.setItem('habitIndex', JSON.stringify(habitIndex)); // array of all added habits
  localStorage.setItem('lastID', JSON.stringify(lastHabitID)); // amount of added habits
  localStorage.setItem('added', JSON.stringify(addedHabits)); // array with habit info

  window.location.href = 'index.html'; // go to index
};

const retrieveLocalStorage_selectedHabitSettings = function () {
  if (JSON.parse(localStorage.getItem('selectedHabit'))) {
    habit = JSON.parse(localStorage.getItem('selectedHabit'));
  }

  if (JSON.parse(localStorage.getItem('added'))) {
    addedHabits = JSON.parse(localStorage.getItem('added'));
  }

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
