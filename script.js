// ham dao chuoi
function reverseString (str) {
	var strBuff = str.split(" ");
	console.log(strBuff);
	var strReverse = "";
	for (var i = 0; i < strBuff.length; i++) {
		
			strBuff[i] = strBuff[i].split("").reverse().join("");
		
		
	}
	strReverse = strBuff.join(" ");
	return strReverse;
}
// ham upper letter
function upperFirstLetter (str) {
	var strBuff = str.split(" ");
	// console.log(strBuff);
	var result = "";
	for (var i = 0; i < strBuff.length; i++) {
		// console.log(strBuff[i].charAt(0).toUpperCase());
		result += " " + strBuff[i].charAt(0).toUpperCase() + strBuff[i].slice(1);
		
		
	}
	
	return result.slice(1);

}
// search the max strength word
function searchMaxWord (str) {
	var strBuff = str.replace(/,/g, "").split(" ");
	// console.log(strBuff);
	var maxWord = ""; 
	for (var i = 0; i < strBuff.length; i++) {
		if(strBuff[i].length > maxWord.length) {
			maxWord = strBuff[i];
			// console.log(maxWord);
		}
		
	}
	return maxWord;
}

//test case

console.log(reverseString("hi there, i am Dang"));
console.log(upperFirstLetter("hi there, i am Dang"));
console.log(searchMaxWord("hi thereeeeeeeeeeee, i am Daaaaaaaaaaaaaaaaang"));