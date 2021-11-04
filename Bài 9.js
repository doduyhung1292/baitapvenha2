console.log("Đỗ Duy Hưng 20183754 ");
var arr = [8, 3, 2, 6, 4 ,7, 1, 13, 2, 8, 10, 2, 13, 1];
var c = 2;
var eC=0, uC=0, dC=0;
for (i=0; i<arr.length; i++) {
  if (arr[i] == c) {eC++;}
  else if (arr[i] >c) {uC++;}
  else {dC++;}
}
console.log("So so lon hon C:", uC);
console.log("So so nho hon C:", dC);
console.log("So so bang C:", eC);
