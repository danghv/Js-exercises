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
    for (var i = 0; i < number1.length; i++) {

    }
}