console.log("Đỗ Duy Hưng 20183754 ");
var arr = [8, 3, 2, 6, 4 ,7, 1, 13, 2, 8, 10, 2, 13, 1];

function isPrime(n) { 
  if (n<2) return false; 
  for (i= 2; i<n-1; i++) { 
    if (n%i == 0) {return false;}; 
  } 
  return true; 
} 
var snt = 0, hs = 0, k = 0;

while (k<arr.length) { 
  if (isPrime(arr[k]) && arr[k] !== 1) snt++;
  if (!isPrime(arr[k]) && arr[k] !== 1) hs++;
  k++;
  if (k == arr.length) break;
} 
console.log("so so nguyen to", snt);
console.log("so hop so", hs);
