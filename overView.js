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
const circle = 'fa-check-circle';
let addedHabits = [];
let day;

const retrieveLocalStorage_overView = function () {
  if (JSON.parse(localStorage.getItem('added'))) {
    addedHabits = JSON.parse(localStorage.getItem('added'));
    setHabits();
  }
 
  //if (JSON.parse(localStorage.getItem('day')))
   //{
    day = JSON.parse(localStorage.getItem('day'));
    setDay();
  //}
};

let setDay = function() {
  if (day == 0) {
    document.querySelector(".monday").style = "color: black";
  } else if (day == 1) {
    document.querySelector(".tuesday").style = "color: black";
  } else if (day == 2) {
    document.querySelector(".wednesday").style = "color: black";
  } else if (day == 3) {
    document.querySelector(".thursday").style = "color: black";
  } else if (day == 4) {
    document.querySelector(".friday").style = "color: black";
  } else if (day == 5) {
    document.querySelector(".saturday").style = "color: black";
  } else if (day == 6) {
    document.querySelector(".sunday").style = "color: black";
  } 
}

let setHabits = function () {
  for (let i = 0; i < addedHabits.length; i++) {
    let tr = document.querySelector('#tr' + addedHabits[i].id);
    let icon = document.querySelector('#habit' + addedHabits[i].id);
    let title = document.querySelector('#title' + addedHabits[i].id);

    tr.classList.remove('hidden');
    if (addedHabits[i].title == 'Training') {
      tr.classList.add('training');
      icon.classList.add(fas);
      icon.classList.add(training);
    } else if (addedHabits[i].title == 'Taking the Stairs') {
      tr.classList.add('takingTheStairs');
      icon.classList.add(fas);
      icon.classList.add(takingStairs);
    } else if (addedHabits[i].title == 'Reading') {
      tr.classList.add('reading');
      icon.classList.add(fas);
      icon.classList.add(reading);
    } else if (addedHabits[i].title == 'Studying') {
      tr.classList.add('study');
      icon.classList.add(fas);
      icon.classList.add(study);
    } else if (addedHabits[i].title == 'Eating Healthy') {
      tr.classList.add('eatHealthy');
      icon.classList.add(fas);
      icon.classList.add(eatHealthy);
    } else if (addedHabits[i].title == 'Go to Bed Early') {
      tr.classList.add('goToBedEarly');
      icon.classList.add(fas);
      icon.classList.add(goToBedEarly);
    } else if (addedHabits[i].title == 'Wake up Early') {
      tr.classList.add('wakeUpEarly');
      icon.classList.add(fas);
      icon.classList.add(wakeUpEarly);
    } else if (addedHabits[i].title == 'No Social Media') {
      tr.classList.add('noSocialMedia');
      icon.classList.add('fab');
      icon.classList.add(lessSocialMedia);
    } else if (addedHabits[i].title == 'No Smoking') {
      tr.classList.add('noSmoking');
      icon.classList.add(fas);
      icon.classList.add(noSmoking);
    } else if (addedHabits[i].title == 'Meditation') {
      tr.classList.add('meditation');
      icon.classList.add(fas);
      icon.classList.add(meditation);
    }
    // Matcha aktivitet med dag
    // Om aktivitet har skett visa check
    for (let j = 0; j < 7; j++) {
      // compare += addedHabits[i].clicked[j];
      if (addedHabits[i].doneDay[j] == true) {
        let dot = document.querySelector('#tr' + addedHabits[i].id + j);
        dot.classList.add(circle);
      }
    }
  }
};

retrieveLocalStorage_overView();
