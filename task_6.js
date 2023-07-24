//Задание 6

/*Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.
*/

const arr = [0, 0, 0, 0];

const result = arr.reduce(function(acc, item, index, array){
           if (acc == false){return false;}
           if (index == 0){return acc;}
           if (item === array[index-1]){return true;}
              else{return false;}
     }, true);
           
console.log(result)