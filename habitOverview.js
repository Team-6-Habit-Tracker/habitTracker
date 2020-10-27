let addedHabits, habit, lastHabitID, currentday, end;


const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// HABITS
const fas = "fas";
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
    document.querySelector('.container').addEventListener('dblclick', goToIndividualHabit);

    document.querySelector('.fa-caret-left').addEventListener('click', changeDayLeft);
    document.querySelector('.fa-caret-right').addEventListener('click', changeDayRight);
}

let changeDayLeft = function() {
    if ((day - 1) >= 0) {
        day -= 1;
        document.querySelector('#day').innerHTML = days[day]
    } else {
        document.querySelector('#day').innerHTML = days[6]
        day = 6;
    }
    localStorage.setItem('day', JSON.stringify(day));
}

let changeDayRight = function() {
    if ((day + 1) <= 6) {
        day += 1;
        document.querySelector('#day').innerHTML = days[day]
    } else {
        document.querySelector('#day').innerHTML = days[0]
        day = 0;
    }
    localStorage.setItem('day', JSON.stringify(day));
}

let habitDone = function() {
    let doneHabit, doneHabitID;
    let compare = 0; 

    doneHabit = event.target;

    console.log(doneHabit.id)
    // I think we can take away the for loop here. donehabit.id should be able to replace i maybe
    if(doneHabit.id != undefined){
        for (let i = 0; i < 10; i++) {
            if (doneHabit.id == ('div' + i) || 
                doneHabit.id == ('selected' + i) || 
                doneHabit.id == ('title' + i) ||
                doneHabit.id == ('send' + i)) {
                doneHabitID = i;

                addedHabits[i].doneDay[day] = true;
                addedHabits[i].clicked[day] ++;
                addedHabits[i].totalClicks ++;

                localStorage.setItem('doneHabitID', JSON.stringify(doneHabitID));
                localStorage.setItem('added', JSON.stringify(addedHabits)); // array with habit info

                for (let j = 0; j < 7; j++) {
                    // compare += addedHabits[i].clicked[j];
                    if (addedHabits[i].doneDay[j] == true) {
                        compare++
                    };
                };

                end = (100 / addedHabits[i].frequency) * compare;
                send = document.querySelector('#send' + i)
                send.value = document.querySelector('#send' + i).value;
                animate(send)
                // console.log(end)

                if (compare == addedHabits[i].frequency) {
                    let delay = 2100 / addedHabits[i].frequency;
                    console.log(delay)
                    // setTimeout(function(){ 
                    //     document.querySelector('.task_completed').classList.remove('hidden');
                    //     setTimeout(function(){ 
                    //         document.querySelector('.task_completed').classList.add('hidden');
                    //     }, 3000);
                    //     console.log('you completed your goal');
                    // }, delay);
                    setTimeout(function(){
                        document.querySelector('#div' + i).classList.add('done');
                        document.querySelector('#check' + i).classList.remove('hidden');
                    }, delay);
                };
            }; 
        };
    };
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

let goToIndividualHabit = function() {
    console.log('double click')
    let clickedHabit;

    clickedHabit = event.target;

    if(clickedHabit.id != undefined){
        for (let i = 0; i < 10; i++) {
            if (clickedHabit.id == ('div' + i) || 
                clickedHabit.id == ('selected' + i) || 
                clickedHabit.id == ('title' + i)) {
                doneHabitID = i;
            }
        }
    }

    localStorage.setItem('doneHabitID', JSON.stringify(doneHabitID));
    localStorage.setItem('added', JSON.stringify(addedHabits)); // array with habit info

    window.location.href = "individualHabit.html"; // go to index
}
    

let setHabits = function() {
    
    for (let i = 0; i < addedHabits.length; i++){
        let div = document.querySelector('#div' + addedHabits[i].id);
        let icon = document.querySelector('#selected' + addedHabits[i].id);
        let title = document.querySelector('#title' + addedHabits[i].id);

        div.classList.remove('hidden');
        div.style = 'display:flex;'

        title.innerHTML = addedHabits[i].title;

        if (addedHabits[i].title == 'Training') {
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
        } else if (addedHabits[i].title == 'No Social Media') {
            icon.classList.add('fab');
            icon.classList.add(lessSocialMedia);
        } else if (addedHabits[i].title == 'No Smoking') {
            icon.classList.add(fas);
            icon.classList.add(noSmoking);
        } else if (addedHabits[i].title == 'Meditation') {
            icon.classList.add(fas);
            icon.classList.add(meditation);
        };


        // Display progress so far
        let timesCompleted = 0;
        for (let j = 0; j < 7; j++) {
            if (addedHabits[i].doneDay[j] == true) {
                timesCompleted++
            };
        };

        let current = (100 / addedHabits[i].frequency) * timesCompleted;
        document.getElementById('send' + i).value = Math.floor(current);

        if (current == 100) {
            document.querySelector('#div' + i).classList.add('done');
            document.querySelector('#check' + i).classList.remove('hidden');
        }

    }; // adds the habits in the order they were selected
}

const retrieveLocalStorage_index = function () {
    
    if (JSON.parse(localStorage.getItem('selectedHabit'))) { 
        habit = JSON.parse(localStorage.getItem('selectedHabit'));
    };

    if (JSON.parse(localStorage.getItem('added'))) {
        addedHabits = JSON.parse(localStorage.getItem('added'));
        setHabits();
    };

    if (JSON.parse(localStorage.getItem('lastID'))) {
        lastHabitID = JSON.parse(localStorage.getItem('lastID'));
    } else {
        lastHabitID = 0;
    }
    
    if (JSON.parse(localStorage.getItem('day'))) { 
        day = JSON.parse(localStorage.getItem('day'));
        document.querySelector('#day').innerHTML = days[day]
    } else {
        day = 0;
        document.querySelector('#day').innerHTML = days[day]
        localStorage.setItem('day', JSON.stringify(day));
    };

    if (JSON.parse(localStorage.getItem('doneHabitID'))) { 
        doneHabitID = JSON.parse(localStorage.getItem('doneHabitID'));
    }; 
};

retrieveLocalStorage_index();
setupEventListeners_index();
