const spinner = document.querySelector('.spinner');
let spinnerDegrees = 0; 
let spinnerX = 0;
let spinnerY = 0;

function spin() {
  
  spinnerDegrees++;
  spinner.style.transform = `rotate(${spinnerDegrees}deg)`;

}

function hideHeader() {
  const header = document.querySelector('.header');
  header.style.opacity = '0';
}

// function moveSpinner() {

//   const moveX = Math.floor(Math.random() * 2);
//   const moveY = Math.floor(Math.random() * 2);

//   spinnerX += moveX;
//   spinnerY += moveY;

//   spinner.style.left = `${spinnerX}px`;
//   spinner.style.top = `${spinnerY}px`;

// }

const spinInterval = setInterval(spin, 5);
// const moveSpinnerInterval = setInterval(moveSpinner, 10);
const headerTimeout = setTimeout(hideHeader, 3000);
