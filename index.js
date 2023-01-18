let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');


let form1btn = document.getElementById('btn1');
let form2btn = document.getElementById('btn2')

let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');

let progress = document.getElementById('progress');

form1btn.onclick = () => {
 form1.style.left = '-300px';
 form2.style.left = '0px';
 progress.style.width = '200px';
}
back1.onclick = () => {
 form1.style.left = '0px';
 form2.style.left = '350px';
 progress.style.width = '100px';
}
form2btn.onclick = () => {
 form2.style.left = '-300px';
 form3.style.left = '0px';
 progress.style.width = '300px';
}
back2.onclick = () => {
 form2.style.left = '0px';
 form3.style.left = '350px';
 progress.style.width = '200px';
}