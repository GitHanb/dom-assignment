const task1El1 = document.getElementById('task-1');
const taskE1l2 = document.querySelector('#task-1');

task1El1.style.color = 'white';
taskE1l2.style.background = 'black';

const docTitle1 = document.querySelector('title');
docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head;
const docTitle2 = docHead.querySelector('title');
docTitle2.textContent = 'Henry';

//const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';