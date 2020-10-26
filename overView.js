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


const retrieveLocalStorage_overView = function () {
  if (JSON.parse(localStorage.getItem('added'))) {
    addedHabits = JSON.parse(localStorage.getItem('added'));
    setHabits();
  }
};

let setHabits = function () {
  for (let i = 0; i < addedHabits.length; i++) {
    let tr = document.querySelector("#tr" + addedHabits[i].id);
    let icon = document.querySelector("#habit" + addedHabits[i].id);
    let title = document.querySelector("#title" + addedHabits[i].id);


    tr.classList.remove("hidden");
    if (addedHabits[i].title == "Training") {
      icon.classList.add(fas);
      icon.classList.add(training);
    } else if (addedHabits[i].title == "Taking the Stairs") {
      icon.classList.add(fas);
      icon.classList.add(takingStairs);
    } else if (addedHabits[i].title == "Reading") {
      icon.classList.add(fas);
      icon.classList.add(reading);
    } else if (addedHabits[i].title == "Studying") {
      icon.classList.add(fas);
      icon.classList.add(study);
    } else if (addedHabits[i].title == "Eating Healthy") {
      icon.classList.add(fas);
      icon.classList.add(eatHealthy);
    } else if (addedHabits[i].title == "Go to Bed Early") {
      icon.classList.add(fas);
      icon.classList.add(goToBedEarly);
    } else if (addedHabits[i].title == "Wake up Early") {
      icon.classList.add(fas);
      icon.classList.add(wakeUpEarly);
    } else if (addedHabits[i].title == "No Social Media") {
      icon.classList.add("fab");
      icon.classList.add(lessSocialMedia);
    } else if (addedHabits[i].title == "No Smoking") {
      icon.classList.add(fas);
      icon.classList.add(noSmoking);
    } else if (addedHabits[i].title == "Meditation") {
      icon.classList.add(fas);
      icon.classList.add(meditation);
    }
    console.log(addedHabits[i].doneDay[3]);
    // Matcha aktivitet med dag
    // Om aktivitet har skett visa check
    for (let j = 0; j < 7; j++) {

      // compare += addedHabits[i].clicked[j];
      if (addedHabits[i].doneDay[j] == true) {
        let dot = document.querySelector("#tr" + addedHabits[i].id + j);
        dot.classList.add(circle);
        
        
      }
    }
  }
}
//   let habitDone = function () {
//     let doneHabit, doneHabitID;
//     let compare = 0;

//     doneHabit = event.target;

//     if (doneHabit.id != undefined) {
//       for (let i = 0; i < 10; i++) {
//         if (
//           doneHabit.id == "div" + i ||
//           doneHabit.id == "selected" + i ||
//           doneHabit.id == "title" + i
//         ) {
//           doneHabitID = i;

//           addedHabits[i].doneDay[day] = true;
//           addedHabits[i].clicked[day]++;
//           addedHabits[i].totalClicks++;

//           localStorage.setItem("doneHabitID", JSON.stringify(doneHabitID));
//           localStorage.setItem("added", JSON.stringify(addedHabits)); // array with habit info

//           for (let j = 0; j < 7; j++) {
//             // compare += addedHabits[i].clicked[j];
//             if (addedHabits[i].doneDay[j] == true) {
//               compare++;
//             }
//           }
//         }
//       }
//     }
//   };
// }
retrieveLocalStorage_overView();
