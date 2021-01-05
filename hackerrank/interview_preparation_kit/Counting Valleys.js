/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

let steps = 12;
let pathpath = 'DDUUDDUDUUUD';
function countingValleys(steps, path) {
	let valleyCount = 0;

	let seaCount = 0;
	for (let i = 0; i < steps; i++) {
		if (path[i] === 'D') {
			seaCount--;
		} else {
			if (seaCount == -1) {
				valleyCount++;
			}
			seaCount++;
		}
	}
	// Write your code here
}

let output = countingValleys(steps, pathpath);
console.log(output);
