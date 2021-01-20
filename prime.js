function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return "Your Number isn't Prime Number";
    }
  }
  return "Your Number is Prime Number";
}

let result = isPrime(15);
console.log(result);
