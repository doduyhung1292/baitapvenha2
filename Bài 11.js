console.log("Đỗ Duy Hưng 20183754 ");
var arr = [8, 3, 2, 3, 5 ,6, 1, 13, 2, 2, 10, 5, 13, 1];
var arr2 = [];
var k=0, temp=1;
while (k< arr.length) {
  if ( arr[k] > arr[k-1]) temp += 1;
  else {arr2.push(temp); temp = 1;}
  k++;
}

var max = arr2[0];
for (i=1; i< arr2.length; i++) {
  if(arr2[i] >= max) max = arr2[i];
  }

var index=0;
for(i = 0; i<arr2.length; i++) {
  if (arr2[i] == max) {
    for(j=0; j<=i-1; j++) {
      index += arr2[j];
    }
  }
}
var start = index - 1;
var end = start + max;
for ( i = start; i < end; i++) {
  console.log(arr[i]);
}
