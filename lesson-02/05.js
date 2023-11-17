let passport = {
  name: 'Petr',
  surname: 'Petrov',
};

let newPassport = { ...passport };
newPassport.name = 'Иван';

console.log(passport);
console.log(newPassport);
