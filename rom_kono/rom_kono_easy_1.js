var text = prompt('введіть текст');
var textArr = text.split(' ');

var newArr = textArr.sort(compare);
function compare(a, b) {
     if (a.length > b.length) {
       return -1;
     }
     if (a.length < b.length) {
       return 1;
     }
     return 0;
   }

console.log(newArr[0]);

