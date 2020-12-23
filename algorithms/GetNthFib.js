// Write a function that takes in an integer n and returns the nth Fibonacci number. 


function getNthFib(n) {
  if (n === 2) {
		return 1;
	}
	if (n === 1) {
		return 0;
	}
 return getNthFib(n - 1) + getNthFib(n - 2);

}