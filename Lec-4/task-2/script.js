let count = 0;
let intervalId = null;

function printNumbers() {
  count++;
  if (count > 10) clearInterval(intervalId);
  else console.log(count);
}

intervalId = setInterval(()=>printNumbers(), 1000);