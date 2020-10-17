let menu = document.querySelector('.menu');
let dropDown = document.querySelector('.drop-down');
let back = document.querySelector('.go_back');

const setupEventListeners = function() {
    menu.addEventListener('click', displayMenu);

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

const goBack = function () {
    window.history.back();
}


setupEventListeners();