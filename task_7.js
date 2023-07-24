// Задание 7

/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, 
что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

const d = [-50, 52];
const arr = [1, 4, d, 7, 7, '3', null, Infinity, NaN, 0];			//заданный массив
const result = arr.reduce(function(acc, item, index, array){
    if (!Number.isInteger(item)){return acc;}
    if (item === 0) {return [acc[0], acc[1], acc[2]+1];}
    if (item%2 === 0) {return [acc[0]+1, acc[1], acc[2]];}
    if (item%2 === 1) {return [acc[0], acc[1]+1, acc[2]];}
  },[0,0,0])

console.log(`четных - ${result[0]}\n нечётных - ${result[1]}\n нулей - ${result[2]}`)