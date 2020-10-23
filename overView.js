const fas = 'fas';
const training = 'fa-dumbbell';
const takingTheStairs = 'fa-walking';
const reading = 'fa-book';
const study = 'fa-laptop-code';
const eatHealthy = 'fa-carrot';
const goToBedEarly = 'fa-bed';
const wakeUpEarly = 'fa-clock';
const noSocialMedia = 'fa-instagram';
const noSmoking = 'fa-smoking-ban';
const meditation = 'fa-om';
const circle = 'fa-check-circle';
let addedHabits = [];

const retrieveLocalStorage_overView = function () {
  if (JSON.parse(localStorage.getItem('added'))) {
    addedHabits = JSON.parse(localStorage.getItem('added'));
    setHabits();
  }
  console.log(addedHabits);
};

let setHabits = function () {
  for (let i = 0; i < addedHabits.length; i++) {
    let tr = document.querySelector('#tr' + addedHabits[i].id);
    let icon = document.querySelector('#habit' + addedHabits[i].id);
    let title = document.querySelector('#title' + addedHabits[i].id);

    tr.classList.remove('hidden');

    if (addedHabits[i].title == '"Training') {
      icon.classList.add(fas);
      icon.classList.add(training);
    } else if (addedHabits[i].title == 'Taking the Stairs') {
      icon.classList.add(fas);
      icon.classList.add(takingStairs);
    } else if (addedHabits[i].title == 'Reading') {
      icon.classList.add(fas);
      icon.classList.add(reading);
    } else if (addedHabits[i].title == 'Studying') {
      icon.classList.add(fas);
      icon.classList.add(study);
    } else if (addedHabits[i].title == 'Eating Healthy') {
      icon.classList.add(fas);
      icon.classList.add(eatHealthy);
    } else if (addedHabits[i].title == 'Go to Bed Early') {
      icon.classList.add(fas);
      icon.classList.add(goToBedEarly);
    } else if (addedHabits[i].title == 'Wake up Early') {
      icon.classList.add(fas);
      icon.classList.add(wakeUpEarly);
    } else if (addedHabits[i].title == 'No Socal Media') {
      icon.classList.add('fab');
      icon.classList.add(lessSocialMedia);
    } else if (addedHabits[i].title == 'No Smoking') {
      icon.classList.add(fas);
      icon.classList.add(noSmoking);
    } else if (addedHabits[i].title == 'Meditation') {
      icon.classList.add(fas);
      icon.classList.add(meditation);
    }
  }
};

retrieveLocalStorage_overView();
