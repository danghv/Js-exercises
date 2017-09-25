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
    var n3 = new Stack();
    var a = number1.toString().split('');
    var b = number2.toString().split('');
    var sub;
    var carry = 0;
    for (var i = 0; i < a.length; i++) {
        n1.pushStack(a[i]);
    }
    console.log(n1.dataStore);
    for (var j = 0; j< b.length; j++) {
        n2.pushStack(b[j]);
    }
    console.log(n2.dataStore);
    var stackA = n1.lengthStack();
    var stackB = n2.lengthStack();
    if (stackA < stackB) {
        while (n1.lengthStack() > 0) {
            let x = parseInt(n1.popStack());
            let y = parseInt(n2.popStack());
            sub = x + y + carry;
            if(sub > 9) {
                carry = 1;
                n3.pushStack(sub.toString().split('')[1]);
            } else {
                n3.pushStack(sub);
                carry = 0;
            }
        }
        while (n2.lengthStack() > 0) {
            let y = parseInt(n2.popStack());
            sub = y + carry;
            if (sub > 9) {
                carry = 1;
                n3.pushStack(sub.toString().split('')[1]);
            } else {
                n3.pushStack(sub);
                carry = 0;
            }
        }
    
    } else {
        while (n2.lengthStack() > 0) {
            let x = parseInt(n1.popStack());
            let y = parseInt(n2.popStack());
            sub = x + y + carry;
            if(sub > 9) {
                carry = 1;
                n3.pushStack(sub.toString().split('')[1]);
            } else {
                n3.pushStack(sub);
                carry = 0;
            }
        }
        while (n1.lengthStack() > 0) {
            let x = parseInt(n1.popStack());
            sub = x + carry;
            if (sub > 9) {
                carry = 1;
                n3.pushStack(sub.toString().split('')[1]);
            } else {
                n3.pushStack(sub);
                carry = 0;
            }
        }
    }

    return n3.dataStore.reverse().join('');

}

console.log(addBigNumber(79, 429));