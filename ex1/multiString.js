function multiString(str, n) {
    var strBuff = "";
    for ( var i = 0; i < n; i++) {
        strBuff += str;
    }
    return strBuff;
}
console.log(multiString("abc", 3));