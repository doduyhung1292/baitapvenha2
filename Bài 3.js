console.log("Đỗ Duy Hưng 20183754 ");
var arr = [8, 3, 2, 6, 4 ,7, 2, 8, 10, 2, 13];

var temp = arr[0];
for (i=1; i< arr.length; i++) {
  if(arr[i] <= temp) temp = arr[i];
  }
console.log(" So nho nhat:", temp);

for (i = 0; i<arr.length; i++) {
  if (arr[i] == temp) console.log(i);
  }
