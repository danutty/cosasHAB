const hora = document.createElement('div');

function reloj() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  if (hour < 10) hour = '0' + hour;
  if (minutes < 10) minutes = '0' + minutes;
  if (second < 10) second = '0' + second;

  hora.textContent = `${hour}:${minutes}:${second}`;
  document.body.appendChild(hora);
}

setInterval(() => {
  reloj();
}, 1000);
