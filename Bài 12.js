console.log("Đỗ Duy Hưng 20183754 ");

var arr = [3, 5, 13];
var arr1 = [8, 3, 2, 3, 5 ,6, 1, 13, 2, 2, 10, 5, 13, 1];

var a = 0, b = 0;
while(a<= arr.length && b<= arr1.length ) {
  for (j=b; j < arr1.length; j++ ) {
      if (arr[a] == arr1[j]) {arr.splice(0, j);}
      a++; b = j++; break;}
  if(arr == []) console.log("La day con");
     
}
