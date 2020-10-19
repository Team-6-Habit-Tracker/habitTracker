
// select habit page
let selectHabitList = document.querySelector('#select_habit_list');
let select = document.querySelectorAll('.select');

let habitIndex = [];
let habit, index;

// HABITS
const fas = "fas";
const training = 'fa-dumbbell';
const takingStairs = 'fas fa-walking';
const reading = 'fas fa-book';


const setupEventListeners_selectHabit = function() {

    selectHabitList.addEventListener('click', chooseHabit)
    
};

let chooseHabit = function (event) {
    let chosenHabit;

    chosenHabit = event.target; // li where the mouse was pressed
    console.log(chosenHabit);

    if (chosenHabit.classList.contains('habit_1')) {
        habit = 'Training';
        index = 'habit_1';

    } else if (chosenHabit.classList.contains('habit_2')) {
        habit = 'Taking the Stairs';
        index = 'habit_2';

    } else if (chosenHabit.classList.contains('habit_3')) {
        habit = 'Reading';
        index = 'habit_3';

    } else if (chosenHabit.classList.contains('habit_4')) {
        habit = 'Studying';
        index = 'habit_4';

    } else if (chosenHabit.classList.contains('habit_5')) {
        habit = 'Eating Healthy';
        index = 'habit_5';

    } else if (chosenHabit.classList.contains('habit_6')) {
        habit = 'Go to Bed Early';
        index = 'habit_6';

    } else if (chosenHabit.classList.contains('habit_7')) {
        habit = 'Wake up Early';
        index = 'habit_7';

    } else if (chosenHabit.classList.contains('habit_8')) {
        habit = 'No Social Media';
        index = 'habit_8';
        
    } else if (chosenHabit.classList.contains('habit_9')) {
        habit = 'No Smoking';
        index = 'habit_9';

    } else if (chosenHabit.classList.contains('habit_10')) {
        habit = 'Meditation';
        index = 'habit_10';
    };
    
    localStorage.setItem('index', JSON.stringify(index));
    localStorage.setItem('selectedHabit', JSON.stringify(habit));

    window.location.href = "selectedHabitSettings.html";
};

const removeSelectedHabits = function () {

    if (JSON.parse(localStorage.getItem('habitIndex'))) {
        habitIndex = JSON.parse(localStorage.getItem('habitIndex'));

        for (let i = 0; i < habitIndex.length; i++) {
            document.querySelector('.' + habitIndex[i]).style = 'display: none;';
        }; 
    };
};


console.log('Application has started');

// retrieveLocalStorage_selectHabit();
setupEventListeners_selectHabit();

removeSelectedHabits();
