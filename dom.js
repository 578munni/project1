const counter = document.getElementById('count');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

let count = 0;

const update = (v) => {
  count = count + v; 
  counter.innerText = count;

  if (count >= 10) {
    plus.setAttribute('disabled',true);
  } else {
    plus.removeAttribute('disabled',false);
  }


  if (count <= 0) {
    minus.setAttribute('disabled',true);
  } else {
    minus.removeAttribute('disabled',false);
  }
} 

plus.addEventListener('click', () => {
  update(1);
});
minus.addEventListener('click', () => {
  update(-1);
});