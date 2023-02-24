let arr = [3, "green", 5, "ice", null, undefined, undefined, true, 6, 7];
let strSummN = 0;
let strSummI = 0;
let strSummS = 0;
let strSummB = 0;
  let sumOdd = 0;
  let sumPar = 0;

let x;
let y;

function arrType() {

for (let i = 0; i < arr.length; i++) {
  
 x = typeof arr[i];
 y = (x == 'string')?  strSummS++ :
 (x == 'boolean')?  strSummB++:
 (x == 'number')?  strSummN++: strSummI++

    if (arr[i] % 2 == 0) {
      sumPar++;
    } else if  (arr[i] % 2 != 0){
      sumOdd++
    };
};
  
 console.log("нечетный : " + sumOdd);
 console.log("четный: " + sumPar);
 console.log('количество цифр: ' + strSummN);
 console.log('количество строк: ' + strSummS);
 console.log('количество bool: ' + strSummB);
 console.log('мы не знаем что это такое, если бы знали: ' + strSummI);
};
arrType();

