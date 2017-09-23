function hasPairWithSum(arr, sum) {
    arr = arr.sort(function(a, b) {
        return a -b;
    });
    var low = 0;
    var high = arr.length - 1;
    var s;
    var arrResult = [];
    while (low < high) {
        s = arr[low] + arr[high];
        if (s > sum) {
            high --;
        } else if (s < sum){
            low ++;
        } else {
            arrResult.push([arr[low], arr[high]]);
            low ++;
            high --;
        }
    }
    return arrResult;
}
console.log(hasPairWithSum([11, 2, 5, 5, 8, 9, 1], 10));