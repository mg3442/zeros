module.exports = function getZerosCount(number) {
  let sum = 0;
  for(let i = 5 ; i<=number ; i*= 5) {
	  let x = Math.floor(number/i);
	  sum += x;
  }
	return sum;
}
