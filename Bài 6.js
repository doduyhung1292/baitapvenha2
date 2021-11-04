console.log("Đỗ Duy Hưng 20183754 ");
var arr = [8, 3, 2, 3, 5 ,6, 1, 9, 2, 2, 10, 5, 13, 1];
var arr1 = [];
for (i = 0; i<arr.length; i++) { 
  for ( j = i+1; j < arr.length; j++) { 
    if(arr[j] % arr[i] == 0) {console.log(arr[i]); break;}
  }
}
