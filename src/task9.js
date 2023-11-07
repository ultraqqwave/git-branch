let credit = 2000000;
const percentperyear = 10;
const years = 2;
let i = 0;
while (years > i) {
  credit += credit * percentperyear / 100;
  i += 1;

return credit;

}
console.log(credit);
