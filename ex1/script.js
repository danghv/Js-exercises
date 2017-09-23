
function findNumbers(arr, sum) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if((arr[i] + arr[j]) === sum && j !==i ) {
            //    for ( var k = 0; k < arrResult.length; k++) {
            //        if (arrResult[k][0] != arr[j]) {
            //         arrResult.push([arr[i], arr[j]]);
            //        }
            //    }
            arrResult.push([arr[i], arr[j]]);
            
            }
        }
        
    }
    for ( var i = 0; i < arrResult.length; i++) {
        for (var j = 0; j < arrResult.length; j++) {
            if (arrResult[i][0] == arrResult[j][1]) {
                arrResult.splice(j, 1);
            }
        }
    }
    return arrResult;
}

console.log(findNumbers([2, 7, 5, 5, 1, 9, 8], 10));