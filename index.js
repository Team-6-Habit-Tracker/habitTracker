let addedHabits, habit, lastHabitID;

let setHabits = function() {
    for (let i = 0; i < addedHabits.length; i++){
        console.log(addedHabits[i].id)
    document.querySelector('#test' + addedHabits[i].id).innerHTML = addedHabits[i].title + ' will be done ' + addedHabits[i].frequency + ' times per week.';
    }; // adds the habits in the order they were selected
}

const retrieveLocalStorage_index = function () {
    
    if (JSON.parse(localStorage.getItem('selectedHabit'))) { 
        habit = JSON.parse(localStorage.getItem('selectedHabit'));
    };

    if (JSON.parse(localStorage.getItem('added'))) {
        addedHabits = JSON.parse(localStorage.getItem('added'));
    };

    if (JSON.parse(localStorage.getItem('lastID'))) {
        lastHabitID = JSON.parse(localStorage.getItem('lastID'));
    } else {
        lastHabitID = 0;
    }
};

retrieveLocalStorage_index();
setHabits();