// Write a function that takes in a non-empty string and returns its run-length encoding.

// From Wikipedia, "run-length encoding is a form of losless data compression in which runs of 
// data are stored as a single data value and count, rather than as the original run." For this 
// problem, a run of data is any sequence of consecutive, identical characters. So the run 
// 'AAA' would be run-length encoded as '3A'.

// Long runs (runs of 10 or more characters) should be encoded in a split fashion, so the string 
// 'AAAAAAAAAAAA' (12 A's) should be run-length encoded as '9A3A'.


// * * * * * hint: think about where you want interation to begin on the input string * * * * *

function runLengthEncoding(string) {
	const encodedChars = [];
	let currRunLength = 1;
	
	for (let i = 1; i < string.length; i += 1) {
		const currChar = string[i];
		const prevChar = string[i - 1];
		
		if (currChar !== prevChar || currRunLength === 9) {
			encodedChars.push(currRunLength.toString());
			encodedChars.push(prevChar);
			currRunLength = 0;
		}
		currRunLength += 1;
	}
	encodedChars.push(currRunLength.toString());
	encodedChars.push(string[string.length - 1]);
	
	return encodedChars.join('');
}
