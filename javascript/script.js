const time = 10000000; // ms
const step = 1; 

function outNum(num, elem) {
   let l = document.querySelector('#' + elem);
   n = 247;
   let t = Math.round(time/(num/step));
   let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
         clearInterval(interval);
      }
      l.innerHTML = n;
   },
      t);
}

outNum(555, 'out-1');
