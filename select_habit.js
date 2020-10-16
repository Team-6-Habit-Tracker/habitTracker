let menu = document.querySelector('.menu');
let dropDown = document.querySelector('.drop-down');
let back = document.querySelector('.go_back');

// select habit page
let selectHabitList = document.querySelector('#select_habit_list');
let select = document.querySelectorAll('.select');

// selected habit settings page
let selectedHabit = document.querySelector('.selected');

let addedHabits = [];
let allAddedHabits = [];

const setupEventListeners = function() {
    menu.addEventListener('click', displayMenu);

    // select habit page
    if (window.location == "file:///Users/emiliafrisell/Desktop/GitHub/habitTracker/select_habit.html") {
        selectHabitList.addEventListener('click', setHabit)
    }

    back.addEventListener('click', goBack)
}

const displayMenu = function () {
    if (menu.classList.contains('fa-bars')) { //menu is not open
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
        dropDown.classList.remove('hidden');
    } else if (menu.classList.contains('fa-times')) {
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
        dropDown.classList.add('hidden');
    }
}

let setHabit = function (event) {
    let chosenHabit;

    chosenHabit = event.target; // li where the mouse was pressed

    if (chosenHabit.classList.contains('habit_1')) {
        habit = 'habit_1';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));   
        localStorage.setItem('added', JSON.stringify(addedHabits));

    } else if (chosenHabit.classList.contains('habit_2')) {
        habit = 'habit_2';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));
        localStorage.setItem('added', JSON.stringify(addedHabits));
        
    } else if (chosenHabit.classList.contains('habit_3')) {
        habit = 'habit_3';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));
        localStorage.setItem('added', JSON.stringify(addedHabits));  

    } else if (chosenHabit.classList.contains('habit_4')) {
        habit = 'habit_4';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));
        localStorage.setItem('added', JSON.stringify(addedHabits));

    } else if (chosenHabit.classList.contains('habit_5')) {
        habit = 'habit_5';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));   
        localStorage.setItem('added', JSON.stringify(addedHabits));

    } else if (chosenHabit.classList.contains('habit_6')) {
        habit = 'habit_6';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));
        localStorage.setItem('added', JSON.stringify(addedHabits));

    } else if (chosenHabit.classList.contains('habit_7')) {
        habit = 'habit_7';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));  
        localStorage.setItem('added', JSON.stringify(addedHabits));

    } else if (chosenHabit.classList.contains('habit_8')) {
        habit = 'habit_8';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));
        localStorage.setItem('added', JSON.stringify(addedHabits));
        
    } else if (chosenHabit.classList.contains('habit_9')) {
        habit = 'habit_9';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));  
        localStorage.setItem('added', JSON.stringify(addedHabits));

    } else if (chosenHabit.classList.contains('habit_10')) {
        habit = 'habit_10';
        addedHabits.push(habit);

        localStorage.setItem('selectedHabit', JSON.stringify(habit));
        localStorage.setItem('added', JSON.stringify(addedHabits));
        
    }
    
    window.location.href = "selectedHabitSettings.html";
};

let loadHabit = function () {
    selectedHabit.innerHTML = 'You selected ' + habit;
    
}
const goBack = function () {
    window.history.back();
}

const retrieveLocalStorage = function () {
    if (JSON.parse(localStorage.getItem('selectedHabit'))) { 
        habit = JSON.parse(localStorage.getItem('selectedHabit'));
    };

}

const removeSelectedHabits = function () {

    if (JSON.parse(localStorage.getItem('added'))) {
        addedHabits = JSON.parse(localStorage.getItem('added'));

        for (let i = 0; i < addedHabits.length; i++) {
            document.querySelector('.' + addedHabits[i]).style = 'display: none;';
        };
        
    };
}

console.log('Application has started');

retrieveLocalStorage();
setupEventListeners();

if (window.location == "file:///Users/emiliafrisell/Desktop/GitHub/habitTracker/selectedHabitSettings.html") {
    loadHabit();
}

if (window.location == "file:///Users/emiliafrisell/Desktop/GitHub/habitTracker/select_habit.html") {
    removeSelectedHabits();
}