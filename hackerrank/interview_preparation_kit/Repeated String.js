let s = 'aba';
let n = 10;
function repeatedString(s, n) {
	let aCount = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] == 'a') {
			aCount++;
		}
	}
	return (n % s.length) * aCount;
}

const repString = repeatedString(s, n);
console.log(repString);
