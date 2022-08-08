module.exports = function check(str, bracketsConfig) {
let arrOpen = [];
let arrClose = [];
let stek = [];

for (i = 0; i < bracketsConfig.length; i++ ) {
    arrOpen[i] = bracketsConfig[i][0]; 
    arrClose[i] = bracketsConfig[i][1];
}
if (str.length%2 !== 0) return false;  // если нечетное к-во скобок, то false.
else {
    for (i = 0; i < str.length; i++) {  // перебираем элементы строки str на определение к какому из 3-х типов относится:
                                        // открывающий, закрывающий, "двойной".
        for (j = 0; j < arrOpen.length; j++){  
            if (str[i] === arrOpen[j] && str[i] !== arrClose[j]) { // элемент - открывающий
                stek.push(str[i]);
            }
            else if (str[i] !== arrOpen[j] && str[i] === arrClose[j]) {  // элемент - закрывающий
              if (stek.length === 0) lastElement = '';
              else lastElement = stek[stek.length - 1];

              if (lastElement === arrOpen[j]) stek.pop(); // удалить последний эл. из стека
              else return false;
            }
            else if (str[i] === arrOpen[j] && str[i] === arrClose[j]) {  // элемент - "двойной" (одинаковый для открывания и закрывания)
              if (stek.length === 0) lastElement = '';
              else lastElement = stek[stek.length - 1];

              if (lastElement === '') stek.push(str[i]);
              else {
                  if (lastElement === str[i]) stek.pop();
                  else stek.push(str[i]);
              }
            }
        } 
    }
    if (stek.length === 0) return true;
    else return false;
  }
}
