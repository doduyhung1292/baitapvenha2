console.log("Đỗ Duy Hưng 20183754 ");
var arr = [8, 3, 2, 6, 5 ,6, 1, 13, 2, 2, 10, 2, 13, 1];

var temp = 1, i=0;
var arr2 = [];
 while (i<arr.length) {
   if (arr[i] == arr[i-1]) temp += 1;
   else {arr2.push(temp); temp = 1;}
   i++
 }
var max = arr2[0];
for (i=1; i< arr2.length; i++) {
  if(arr2[i] >= max) max = arr2[i];
  }
console.log("dãy con dài nhất:", max);
var index=0;
for(i = 0; i<arr2.length; i++) {
  if (arr2[i] == max) {
    for(j=0; j<=i-1; j++) {
      index += arr2[j];
    }
  }
}
console.log("chỉ số đầu tiên:", index+1);
