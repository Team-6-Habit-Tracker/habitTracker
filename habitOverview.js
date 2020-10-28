let addedHabits, habit, lastHabitID, currentday, end, habitIndex;

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

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

let setupEventListeners_index = function() {
    document.querySelector('.container').addEventListener('click', habitDone);

    document
        .querySelectorAll('.wrapper')
        .forEach((element) => element.addEventListener('click', habitDelete));

    document
        .querySelector('.fa-caret-left')
        .addEventListener('click', changeDayLeft);
    document
        .querySelector('.fa-caret-right')
        .addEventListener('click', changeDayRight);
};

let changeDayLeft = function() {
    if (day - 1 >= 0) {
        day -= 1;
        document.querySelector('#day').innerHTML = days[day];
    } else {
        document.querySelector('#day').innerHTML = days[6];
        day = 6;
    }
    localStorage.setItem('day', JSON.stringify(day));
};

let changeDayRight = function() {
    if (day + 1 <= 6) {
        day += 1;
        document.querySelector('#day').innerHTML = days[day];
    } else {
        document.querySelector('#day').innerHTML = days[0];
        day = 0;
    }
    localStorage.setItem('day', JSON.stringify(day));
};

let habitDone = function() {
    let doneHabit, doneHabitID;
    let compare = 0;

    doneHabit = event.target;

    if (doneHabit.id != undefined) {
        for (let i = 0; i < 10; i++) {
            if (
                doneHabit.id == 'div' + i ||
                doneHabit.id == 'selected' + i ||
                doneHabit.id == 'title' + i
            ) {
                doneHabitID = i;

                addedHabits[i].doneDay[day] = true;
                addedHabits[i].clicked[day]++;
                addedHabits[i].totalClicks++;

                localStorage.setItem('doneHabitID', JSON.stringify(doneHabitID));
                localStorage.setItem('added', JSON.stringify(addedHabits)); // array with habit info

                for (let j = 0; j < 7; j++) {
                    // compare += addedHabits[i].clicked[j];
                    if (addedHabits[i].doneDay[j] == true) {
                        compare++;
                    }
                }

                end = (100 / addedHabits[i].frequency) * addedHabits[i].totalClicks;
                send = document.querySelector('#send' + i);
                send.value = document.querySelector('#send' + i).value;
                animate(send);
                // console.log(end)

                if (addedHabits[i].totalClicks == addedHabits[i].frequency) {
                    let delay = 2100 / addedHabits[i].frequency;
                    console.log(delay);
                    // setTimeout(function(){
                    //     document.querySelector('.task_completed').classList.remove('hidden');
                    //     setTimeout(function(){
                    //         document.querySelector('.task_completed').classList.add('hidden');
                    //     }, 3000);
                    //     console.log('you completed your goal');
                    // }, delay);
                    setTimeout(function() {
                        document.querySelector('#div' + i).classList.add('done');
                        document.querySelector('#check' + i).classList.remove('hidden');
                    }, delay);
                }
            }
        }
    }
};

function animate(node) {
    return new Promise(function(resolve) {
        var i = send.value;
        (function loop() {
            node.value = i;
            if (i < end) {
                i++;
                requestAnimationFrame(loop);
            } else {
                resolve();
            }
        })();
    });
}

let setHabits = function() {
    for (let i = 0; i < addedHabits.length; i++) {
        let div = document.querySelector('#div' + addedHabits[i].id);
        let send = document.querySelector('#send' + addedHabits[i].id);
        let icon = document.querySelector('#selected' + addedHabits[i].id);
        let title = document.querySelector('#title' + addedHabits[i].id);
        let color = document.querySelector('.color' + addedHabits[i].id);

        div.classList.remove('hidden');
        // div.style = 'display:flex;';

        title.innerHTML = addedHabits[i].title;

        if (addedHabits[i].title == 'Training') {
            icon.classList.add(fas);
            icon.classList.add(training);
            color.classList.add('bgtraining');
            send.style = '--rest-color: #805159;';
        } else if (addedHabits[i].title == 'Taking the Stairs') {
            icon.classList.add(fas);
            icon.classList.add(takingStairs);
            icon.classList.add(training);
            color.classList.add('bgtakingTheStairs');
            send.style = '--rest-color: #a3c4cb;';
        } else if (addedHabits[i].title == 'Reading') {
            icon.classList.add(fas);
            icon.classList.add(reading);
            color.classList.add('bgreading');
            send.style = '--rest-color: #e2c6e2;';
        } else if (addedHabits[i].title == 'Studying') {
            icon.classList.add(fas);
            icon.classList.add(study);
            color.classList.add('bgstudy');
            send.style = '--rest-color: #ffe1a8;';
        } else if (addedHabits[i].title == 'Eating Healthy') {
            icon.classList.add(fas);
            icon.classList.add(eatHealthy);
            color.classList.add('bgeatHealthy');
            send.style = '--rest-color: #ced0ac;';
        } else if (addedHabits[i].title == 'Go to Bed Early') {
            icon.classList.add(fas);
            icon.classList.add(goToBedEarly);
            color.classList.add('bggoToBedEarly');
            send.style = '--rest-color: #e16452;';
        } else if (addedHabits[i].title == 'Wake up Early') {
            icon.classList.add(fas);
            icon.classList.add(wakeUpEarly);
            color.classList.add('bgwakeUpEarly');
            send.style = '--rest-color: #f3a0f0;';
        } else if (addedHabits[i].title == 'No Social Media') {
            icon.classList.add('fab');
            icon.classList.add(lessSocialMedia);
            color.classList.add('bgnoSocialMedia');
            send.style = '--rest-color: #c89e98;';
        } else if (addedHabits[i].title == 'No Smoking') {
            icon.classList.add(fas);
            icon.classList.add(noSmoking);
            color.classList.add('bgnoSmoking');
            send.style = '--rest-color: #b0b6d8;';
        } else if (addedHabits[i].title == 'Meditation') {
            icon.classList.add(fas);
            icon.classList.add(meditation);
            color.classList.add('bgmeditation');
            send.style = '--rest-color: #a3cbb1;';
        }

        // Display progress so far
        let timesCompleted = addedHabits[i].totalClicks;


        let current = (100 / addedHabits[i].frequency) * timesCompleted;
        document.getElementById('send' + i).value = Math.floor(current);

        if (current == 100) {
            document.querySelector('#div' + i).classList.add('done');
            document.querySelector('#check' + i).classList.remove('hidden');
        }
    } // adds the habits in the order they were selected
};

function habitDelete(e) {
    let splitID, NR, positionOf;

    const deleteItem = e.target.parentNode.parentNode;

    if (e.target.classList.contains('erase')) {
        deleteItem.style = 'display: none';

        splitID = deleteItem.id.split('v');
        NR = splitID[1];
        console.log(NR)

        if (addedHabits[NR].title == 'Training') {
            index = 'habit_1';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'Taking the Stairs') {
            index = 'habit_2';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'Reading') {
            index = 'habit_3';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'Studying') {
            index = 'habit_4';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'Eating Healthy') {
            index = 'habit_5';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'Go to Bed Early') {
            index = 'habit_6';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'Wake up Early') {
            index = 'habit_7';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'No Social Media') {
            index = 'habit_8';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'No Smoking') {
            index = 'habit_9';
            positionOf = habitIndex.indexOf(index);
        } else if (addedHabits[NR].title == 'Meditation') {
            index = 'habit_10';
            positionOf = habitIndex.indexOf(index);
        }


        habitIndex.splice(positionOf, 1);
        addedHabits.splice(NR, 1)

        //  resets the ids of the entries so that they are in consecutive order when the page is refreshed
        for (let i = 0; i < addedHabits.length; i++) {
            addedHabits[i].id = i;
        }

        lastHabitID = addedHabits.length;

        //save the updated array to localStorage without the deleted div
        localStorage.setItem('added', JSON.stringify(addedHabits));
        localStorage.setItem('lastID', JSON.stringify(lastHabitID));
        localStorage.setItem('habitIndex', JSON.stringify(habitIndex));
    }
}




// let setHabits = function () {
//   for (let i = 0; i < addedHabits.length; i++) {
//     let div = document.querySelector('#div' + addedHabits[i].id);
//     let send = document.querySelector('#send' + addedHabits[i].id);
//     let icon = document.querySelector('#selected' + addedHabits[i].id);
//     let title = document.querySelector('#title' + addedHabits[i].id);
//     let color = document.querySelector('.color' + addedHabits[i].id);

//     div.classList.remove('hidden');
//     // div.style = 'display:flex;';

//     title.innerHTML = addedHabits[i].title;

//     if (addedHabits[i].title == 'Training') {
//       icon.classList.add(fas);
//       icon.classList.add(training);
//       color.classList.add('bgtraining');
//       send.style = '--rest-color: #805159;';
//     } else if (addedHabits[i].title == 'Taking the Stairs') {
//       icon.classList.add(fas);
//       icon.classList.add(takingStairs);
//       icon.classList.add(training);
//       color.classList.add('bgtakingTheStairs');
//       send.style = '--rest-color: #a3c4cb;';
//     } else if (addedHabits[i].title == 'Reading') {
//       icon.classList.add(fas);
//       icon.classList.add(reading);
//       color.classList.add('bgreading');
//       send.style = '--rest-color: #e2c6e2;';
//     } else if (addedHabits[i].title == 'Studying') {
//       icon.classList.add(fas);
//       icon.classList.add(study);
//       color.classList.add('bgstudy');
//       send.style = '--rest-color: #ffe1a8;';
//     } else if (addedHabits[i].title == 'Eating Healthy') {
//       icon.classList.add(fas);
//       icon.classList.add(eatHealthy);
//       color.classList.add('bgeatHealthy');
//       send.style = '--rest-color: #ced0ac;';
//     } else if (addedHabits[i].title == 'Go to Bed Early') {
//       icon.classList.add(fas);
//       icon.classList.add(goToBedEarly);
//       color.classList.add('bggoToBedEarly');
//       send.style = '--rest-color: #5bb2c2;';
//     } else if (addedHabits[i].title == 'Wake up Early') {
//       icon.classList.add(fas);
//       icon.classList.add(wakeUpEarly);
//       color.classList.add('bgwakeUpEarly');
//       send.style = '--rest-color: #bf6394;';
//     } else if (addedHabits[i].title == 'No Social Media') {
//       icon.classList.add('fab');
//       icon.classList.add(lessSocialMedia);
//       color.classList.add('bgnoSocialMedia');
//       send.style = '--rest-color: #c89e98;';
//     } else if (addedHabits[i].title == 'No Smoking') {
//       icon.classList.add(fas);
//       icon.classList.add(noSmoking);
//       color.classList.add('bgnoSmoking');
//       send.style = '--rest-color: #b0b6d8;';
//     } else if (addedHabits[i].title == 'Meditation') {
//       icon.classList.add(fas);
//       icon.classList.add(meditation);
//       color.classList.add('bgmeditation');
//       send.style = '--rest-color: #a3cbb1;';
//     }

//     //  resets the ids of the entries so that they are in consecutive order when the page is refreshed
//     for (let i = 0; i < addedHabits.length; i++) {
//       addedHabits[i].id = i;
//     }

//     lastHabitID = addedHabits.length;

//     //save the updated array to localStorage without the deleted div
//     localStorage.setItem('added', JSON.stringify(addedHabits));
//     localStorage.setItem('lastID', JSON.stringify(lastHabitID));
//     localStorage.setItem('habitIndex', JSON.stringify(habitIndex));
//   }
// };

const retrieveLocalStorage_index = function() {
    if (JSON.parse(localStorage.getItem('selectedHabit'))) {
        habit = JSON.parse(localStorage.getItem('selectedHabit'));
    }

    if (JSON.parse(localStorage.getItem('added'))) {
        addedHabits = JSON.parse(localStorage.getItem('added'));
        setHabits();
    }

    if (JSON.parse(localStorage.getItem('lastID'))) {
        lastHabitID = JSON.parse(localStorage.getItem('lastID'));
    } else {
        lastHabitID = 0;
    }

    if (JSON.parse(localStorage.getItem('day'))) {
        day = JSON.parse(localStorage.getItem('day'));
        document.querySelector('#day').innerHTML = days[day];
    } else {
        day = 0;
        document.querySelector('#day').innerHTML = days[day];
        localStorage.setItem('day', JSON.stringify(day));
    }

    if (JSON.parse(localStorage.getItem('doneHabitID'))) {
        doneHabitID = JSON.parse(localStorage.getItem('doneHabitID'));
    }

    if (JSON.parse(localStorage.getItem('habitIndex'))) {
        habitIndex = JSON.parse(localStorage.getItem('habitIndex'));
    }
};

retrieveLocalStorage_index();
setupEventListeners_index();