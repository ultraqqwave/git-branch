let seconds = 14723;
let minutes = 0;
let hours = 0;
while (seconds >= 3600 ) {
  seconds -= 3600;
  hours += 1
}

while (seconds >= 60 && seconds < 3600) {
  seconds -= 60;
  minutes += 1;
}

result = ('Время: ' + hours + ' ч ' + minutes + ' мин ' + seconds + ' сек');
console.log(result)