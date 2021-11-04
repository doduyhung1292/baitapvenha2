console.log("Đỗ Duy Hưng 20183754 ");
var arr = [8, 3, 2, 6, 4 ,7, 8, 10, 2, 13];

function isPrime(n) { 
  if (n<2) return false; 
  for (i= 2; i<n-1; i++) { 
    if (n%i == 0) {return false;}; 
  } 
  return true; 
} 

var k = 0;

while (k<arr.length) {  
  if (isPrime(arr[k])) {console.log(arr[k]);} 
  k++;
  if (k == arr.length) break;

} 
