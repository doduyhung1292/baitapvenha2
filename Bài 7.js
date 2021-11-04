console.log("Đỗ Duy Hưng 20183754 ");
var arr = [8, 3, 2, 6, 4 ,7, 1, 13, 2, 8, 10, 2, 13, 1];

arr.sort((a, b) => {return a-b;}) // Sắp xếp tăng dần

var minOk = arr[0];
for(i = 1; i<arr.length; i++) {
  if (arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) {minOk = arr[i]; break;}
}
console.log(minOk)
