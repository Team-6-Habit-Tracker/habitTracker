let menu = document.querySelector('.menu');
let dropDown = document.querySelector('.drop-down');

const setupEventListeners = function () {
  menu.addEventListener('click', displayMenu);

  if (document.querySelector('.go_back')) {
    document.querySelector('.go_back').addEventListener('click', goBack);
  }

  dropDown.addEventListener('click', goToIndividualHabit);
};

const displayMenu = function () {
  if (menu.classList.contains('fa-bars')) {
    //menu is closed
    menu.classList.remove('fa-bars');
    menu.classList.add('fa-times');
    dropDown.classList.remove('hidden');
  } else if (menu.classList.contains('fa-times')) {
    // menu is open
    menu.classList.remove('fa-times');
    menu.classList.add('fa-bars');
    dropDown.classList.add('hidden');
  }
};

// Function to display the added habit in the drop down manue, which is being called while calling the date from local storage.
let habitManueList = function () {
  for (let i = 0; i < addedHabits.length; i++) {
    let dropDownList = document.querySelector('#rafe' + addedHabits[i].id);
    
    if (addedHabits[i].title == 'Training') {
      dropDownList.innerHTML = 'Training';
    } else if (addedHabits[i].title == 'Take the Stairs') {
      dropDownList.innerHTML = 'Take the Stairs';
    } else if (addedHabits[i].title == 'Reading') {
      dropDownList.innerHTML = 'Reading';
    } else if (addedHabits[i].title == 'Studying') {
      dropDownList.innerHTML = 'Studying';
    } else if (addedHabits[i].title == 'Eating Healthy') {
      dropDownList.innerHTML = 'Eating Healthy';
    } else if (addedHabits[i].title == 'Go to Bed Early') {
      dropDownList.innerHTML = 'Go to Bed Early';
    } else if (addedHabits[i].title == 'Wake up Early') {
      dropDownList.innerHTML = 'Wake up Early';
    } else if (addedHabits[i].title == 'No Social Media') {
      dropDownList.innerHTML = 'No Social Media';
    } else if (addedHabits[i].title == 'No Smoking') {
      dropDownList.innerHTML = 'No Smoking';
    } else if (addedHabits[i].title == 'Meditation') {
      dropDownList.innerHTML = 'Meditation';
    }
  }
};
let goToIndividualHabit = function () {
  targetedHabit = event.target;
  
    if (targetedHabit.id.indexOf('rafe') == 0) { // if it contains the correct ids
      if (targetedHabit.innerHTML != '') { // if theres a habit added

        for (let i = 0; i < 10; i++) {
          if (targetedHabit.id == 'rafe' + i) {
              doneHabitID = i;
          }
        }

        localStorage.setItem('doneHabitID', JSON.stringify(doneHabitID));
        window.location.href = 'individualHabit.html';
    }
  }
};

const goBack = function () {
    window.history.back();
};

// Retrieve the local storage for addedHabit array which is the array to store all the added habits
const retrieveLocalStorage_dropDown = function () {
  if (JSON.parse(localStorage.getItem('added'))) {
    addedHabits = JSON.parse(localStorage.getItem('added'));
    habitManueList();
  }
};

setupEventListeners();
retrieveLocalStorage_dropDown();
