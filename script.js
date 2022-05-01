console.log('test');


// GOAL 1. create input form that adds data to a table

// query selectors (grabbing/targeting html elements and setting them to variable to use)
const name = document.querySelector('#nameInput');
const submit = document.querySelector('#submit');
const table = document.querySelector('table');
// let names = []

// console.log(name, submit);


// helper function
const addName = () => {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = name.value;
    tr.append(td);
    table.append(tr);
}

// event listners
submit.addEventListener('click', addName);


// GOAL 2. refactor the above code using an array
// GOAL 3. preload data from an API Fetch request
// GOAL 4. set up an infinite scroll


