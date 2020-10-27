/*
//selectors


const container = document.createElement('container');

const trashButton = document.createElement('deleteBtn');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-btn');
trashButton.appendChild(trashButton);
//Event listeners

//functions
//document.querySelector('.container').addEventListener('click', deleteHabit);

function habitDelete(e) {
  const deleteItem = e.target;
  if (deleteItem.classList[0] === 'trash-btn');
  {
    //targeted the icon only, must taget parent
    const deleteHabit = deleteItem.parentElement;
    deleteItem.remove();
  }
}
*/
