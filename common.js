let menu = document.querySelector('.menu');
let dropDown = document.querySelector('.drop-down');

// let doneHabitID;

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
// Retrieve the local storage for addedHabit array which is the array to store all the added habits
const retrieveLocalStorage_dropDown = function () {
  if (JSON.parse(localStorage.getItem('added'))) {
    addedHabits = JSON.parse(localStorage.getItem('added'));
    habitManueList();
  }
};
// Function to display the added habit in the drop down manue, which is being called while calling the date from local storage.
let habitManueList = function () {
  for (let i = 0; i < addedHabits.length; i++) {
    let dropDownList = document.querySelector('#rafe' + addedHabits[i].id);
    console.log(dropDownList);
    console.log(addedHabits[i].title);

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
// let habitIndividualPage = function (){
//     // Create anchor element.
//     let a = document.createElement('a');

//     // Set the href property.
//     a.href = "individualHabit.html";

//     // Append the anchor element to the body.
//     document.ul.appendChild(a);
// }

let goToIndividualHabit = function () {
  targetedHabit = event.target;
  console.log(targetedHabit);

  if (targetedHabit.id == 'rafe0') {
    doneHabitID = 0;
  } else if (targetedHabit.id == 'rafe1') {
    doneHabitID = 1;
  } else if (targetedHabit.id == 'rafe2') {
    doneHabitID = 2;
  } else if (targetedHabit.id == 'rafe3') {
    doneHabitID = 3;
  } else if (targetedHabit.id == 'rafe4') {
    doneHabitID = 4;
  } else if (targetedHabit.id == 'rafe5') {
    doneHabitID = 5;
  } else if (targetedHabit.id == 'rafe6') {
    doneHabitID = 6;
  } else if (targetedHabit.id == 'rafe7') {
    doneHabitID = 7;
  } else if (targetedHabit.id == 'rafe8') {
    doneHabitID = 8;
  } else if (targetedHabit.id == 'rafe9') {
    doneHabitID = 9;
  }

  localStorage.setItem('doneHabitID', JSON.stringify(doneHabitID));
  window.location.href = 'individualHabit.html';
};

const goBack = function () {
  if (window.history.back() != 'selectedHabitSettings.html') {
    window.history.back();
  }
};

console.log(document.referrer);

setupEventListeners();
retrieveLocalStorage_dropDown();
