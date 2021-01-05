let c = [ 0, 0, 1, 0, 0, 1, 0 ];
function jumpingOnClouds(c) {
	var stepsArray = [];

	let i = 0;
	while (i < c.length - 1) {
		if (i + 2 < c.length && c[i + 2] === 0) {
			stepsArray.push(c[i + 2]);
			i += 2;
		} else {
			stepsArray.push(c[i + 1]);
			i += 1;
		}
	}
	return stepsArray.length;
}
let jumpClouds = jumpingOnClouds(c);
console.log(jumpClouds, 'hey');
