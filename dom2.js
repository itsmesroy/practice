function addTask() {
    const list = document.querySelector('#todo-list'); // Selecting required HTML DOM nodes
    const listItem = document.createElement('li'); // Creating a new list item

    // Adding atreibutes and content to the newly created HTML element
    listItem.textContent = 'Bring Milk';
    listItem.style.color = "white";
    listItem.style.backgroundColor = 'hotpink';

    list.append(listItem);

}