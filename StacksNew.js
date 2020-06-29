const { teal } = require("color-name");

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    };
    // push
    push(data) {
        if (this.top === null) {
           this.top = new _Node(data, null) 
        }
        const node = new _Node(data, this.top)
        this.top = node;
    }
    pop() {
        if (this.top === null) {
            return
         }
         const node = this.top
         this.top = node.next
         return node.data
    }
}


const peek = (stack) => {
    return (stack.top === null) ? stack.top.data : null
}


const isEmpty = (stack) => {
    return (stack.top === null) ? true : faalse
}

const display = (stack) => {
    if (stack.top === null) {
        return 
    }
    while(stack.top.next !== null) {
        console.log(stack.top)
        stack.top = stack.top.next
    }
    return
}

const remove = (stack, value) => {  
    if (stack.top === null) {
        return 
    }
    while(stack.top !== null && stack.top.data !== value) {
        stack.top = stack.top.next
    }
    if (stack.top === null) {
        console.log("Value not found")
        return 
    }
    stack.pop()
    return
}
const is_palindrome = s => {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const length = s.length;
    const mid = length / 2;
    const stack = new Stack;
    let i;
    for (i = 0; i < mid; i++) {
        stack.push(s[i])
    }
    if (length %2 != 0) {
        i++;
    }
    while (i < length) {
        let element = stack.pop();
        if (element != s[i]) {
            return false
        }
        i++
    }
    return true
}

/// ????
const balancedExpression = s => {
    const stack = new Stack;
    let currChar = null
    const length = s.length
    const charList = ["(", "{", "["];
    let position = 0;
    for (let i = 0; i < length; i++) {
        if (charList.includes(s[i])){
            stack.push(s[i])
            console.log(stack)
        }
        else {
            if(!stack) {
                return false
            }
            currChar = stack.pop();
    
            if (currChar === "(" ){
                if (s[i] != ")");
                return false
            }
            if (currChar === "{" ){
                if (s[i] != "}");
                return false
            }
            if (currChar === "[" ){
                if (s[i] != "]");
                return false
            }
        }
    }
    //console.log(`Missing a ${need} in ${position}`)
}

const sortStack = (stack) =>{
    const tempStack = new Stack;
    while(isEmpty(stack) == false) {
        let temp = stack.top.data
        stack.pop()
        while (isEmpty(tempStack) === false && parseInt(tempStack.top.data) > parseInt(temp)) {
            stack.push(tempStack.top);
            tempStack.pop()
        }
        tempStack.push(temp)
    }
    return tempStack
    // organize all from greatest to least
    // push all
}


class queueWithStack {
    constructor(){
        this.stack1 = new Stack;
        this.stack2 = new Stack;
        let stack2Length = null;
        let stack1Length = null;
    }
 
    enqueue(value) {
        for(let i = 0; i < stack2Length; i++){
            this.stack1.push(stack2.pop())
            stack1Length++
            stack2Length--
        }
        this.stack1.push(value)
        stack1Length++
    }
    dequeue() {
        while(this.stack1 !== null) {
            this.stack2.push(stack1.pop())
            stack1Length--
            stack2Length++
        }
        return this.stack2.pop()
    }
}

const main = () => {
    const starTrek = new Stack;
    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")
    //console.log(display(starTrek))
    remove(starTrek, 'McCoy')
    //console.log(display(starTrek))
    //console.log(is_palindrome("1001"))
    console.log(balancedExpression("(Hello)"))
}

main()


// Balanced Expressions