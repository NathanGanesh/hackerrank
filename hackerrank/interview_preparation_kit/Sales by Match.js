let arr = [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ];
function sockMerchant(n, ar) {
	let count = 0;
	for (let i = 0; i < n; i++) {
		for (let z = i + 1; z < n; z++) {
			if (parseInt(ar[i]) === parseInt(ar[z])) {
				count++;
				console.log(ar[i], ar[z]);
				delete ar[i];
				delete ar[z];
				break;
			}
		}
	}
	return count;
}
let result = sockMerchant(9, arr);
console.log(result);
