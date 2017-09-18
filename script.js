// ham dao chuoi
function reverseString (str) {
	var strBuff = str.split(" ");
	// console.log(strBuff);
	var strReverse = "";
	var strBuffSpecialCharacter;
	var specialCharacter;
	for (var i = 0; i < strBuff.length; i++) {
			specialCharacter = strBuff[i].charAt(strBuff[i].length - 1);
			if( [".", ",", "?"].indexOf(specialCharacter) > -1 ) {
				
				// console.log(specialCharacter);
				// console.log(strBuff[4].charAt(strBuff.length - 1));
				strBuffSpecialCharacter = strBuff[i].slice(0, strBuff[i].length - 1);
				// console.log(strBuffSpecialCharacter);
				strBuffSpecialCharacter = strBuffSpecialCharacter.split("").reverse().join("");
				strBuff[i] = strBuffSpecialCharacter + specialCharacter;
			} else {
				strBuff[i] = strBuff[i].split("").reverse().join("");
			}
				
	}
	strReverse = strBuff.join(" ");
	return strReverse;
}
//ham check cu phap string
function checkString (str) {
	var specialCharacters = ['.', ',', '?', ';', ':'];
	for (var index = 0; index < specialCharacters.length; index++) {
		// console.log(str.indexOf(specialCharacters[index]));
		if(str.indexOf(specialCharacters[index]) > -1) {
			return false;
		}
		
	}
	return true;
}
// ham upper letter
function upperFirstLetter (str) {
	var strBuff = str.split(" ");
	var buff;
	var finalCharacterOfWord;
	var specialCharacters = ['.', ',', '?'];
	// console.log(strBuff);
	var result = "";
	for (var i = 0; i < strBuff.length; i++) {
		// console.log(checkString(strBuff[i]));
		// console.log(strBuff[i].charAt(0).toUpperCase());
		finalCharacterOfWord = strBuff[i].charAt(strBuff[i].length - 1);
		// console.log(finalCharacterOfWord);
		// console.log(specialCharacters.indexOf(finalCharacterOfWord));
		if(checkString(strBuff[i]) === false && specialCharacters.indexOf(finalCharacterOfWord) === -1) {
			// strBuff[i].replace(/\./g, " ");
			buff = strBuff[i].replace(/\.|\:|\;|\,/g, " ").split(" ");
			// console.log(buff);
			for( var j = 0; j < buff.length; j++) {
				buff[j] = buff[j].charAt(0).toUpperCase() + buff[j].slice(1);
			}
			
			strBuff[i] = buff.join(" ");
			console.log(strBuff[i]);
			
			
		}else{
			strBuff[i] = strBuff[i].charAt(0).toUpperCase() + strBuff[i].slice(1);
			// console.log(strBuff[i]);
		}
		// var buff = strBuff[i].split(" ");
		// result += " " + strBuff[i].charAt(0).toUpperCase() + strBuff[i].slice(1);
		
		
	}
	
	return strBuff.join(" ");

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

console.log(reverseString("Một tiếng súng chỉ thiên vang lên uy hiếp Thọ, trinh sát P. lao vào đập tan cửa kính taxi, khi những mảnh kính rơi còn chưa kịp chạm đất thì cánh tay chắc nịch của trinh sát đã khống chế Thọ."));
console.log(upperFirstLetter("hi. there, i am Dang.good,to:see;you"));
console.log(searchMaxWord("hi thereeeeeeeeeeee, i am Daaaaaaaaaaaaaaaaang ?????????????????????????????????????????????????!!!!!!!!!!!!"));