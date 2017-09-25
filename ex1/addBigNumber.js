//declare Stack structure
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.pushStack = pushStack;
    this.popStack = popStack;
    this.peekStack = peekStack;
    this.clearStack = clearStack;
    this.lengthStack = lengthStack;
}
function pushStack(element) {
    this.dataStore[this.top ++] = element;
}
function popStack() {
    return this.dataStore[ --this.top];
}
function peekStack() {
    return this.dataStore[this.top - 1];
}
function clearStack() {
    this.top = 0;
}
function lengthStack() {
    return this.top;
}
// write addBigNumber Function

function addBigNumber(number1, number2) {
    var i, j;
    var n1 = new Stack();
    var n2 = new Stack();
    var result = new Stack();
    var a = number1.toString().split('');
    var b = number2.toString().split('');
    var sub, carry;
    for (var i = 0; i < a.length; i++) {
        n1.pushStack(a[i]);
    }
    console.log(n1.dataStore);
    for (var j = 0; j< b.length; j++) {
        n2.pushStack(b[j]);
    }
    console.log(n2.dataStore);
    if (n1.lengthStack() < n2.lengthStack()) {
        while (n2.lengthStack() > 0) {
            sub = n1.popStack() + n2.popStack();
        }
    }

}

console.log(addBigNumber(389, 429));