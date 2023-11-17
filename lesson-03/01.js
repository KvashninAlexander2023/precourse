const colors = ['синий', 'черный', 'зеленый', 'красный', 'желтый', 'зеленый'];

function createColorString() {
  // return colors ФИЛЬТРУЕМ.ПРЕВРАЩАЕМ В СТРОКУ('-')
  return colors
    .filter((elem) => {
      return elem === 'черный' || elem === 'красный' || elem === 'желтый';
    })
    .join('-');
}

console.log(createColorString());
