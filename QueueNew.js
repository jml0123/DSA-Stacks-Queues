class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data){
        const node = new _Node(data)
        if(this.first === null) {
            this.first = node;
        }
        if(this.last) {
            this.last.next = node
        }
        this.last = node;
    }
    dequeue() {
        if (this.first === null) {
            // no queue exists
            return
        }
        const node = this.first;
        this.first = this.first.next

        if (node === this.last) {
            this.last = null
        }
        return node.value
    }
}

const display = (queue) => {
    if (queue.first === null) {
        return 
    }
    while(queue.first !== null) {
        console.log(queue.first)
        queue.first = queue.first.next
    }
    return
}

const peek = (queue) => {
    if (queue.first === null) {
        return 
    }
    return queue.first;
}


const isEmpty = (queue) => {
    if (queue.first === null) {
        return true
    }
    return false
}

const remove = (queue, value) => {
    if (queue.first === null) {
        return 
    }
    while(queue.first !== null && queue.first.value !== value) {
        queue.first = queue.first.next
    }
    if (queue.first === null) {
        console.log("Value not found")
        return 
    }
    queue.dequeue()
    return
}


const main = () => {
    const starTrekQ = new Queue;
    starTrekQ.enqueue("Kirk");
    starTrekQ.enqueue("Spock");
    starTrekQ.enqueue("Uhura");
    starTrekQ.enqueue("Sulu");
    starTrekQ.enqueue("Checkov")
    //console.log(display(starTrekQ))
    remove(starTrekQ, "Spock")
    console.log(display(starTrekQ))
    // 7.  Doubly linked list queue??
}

main()


// Square Dance
// Ophidian Bank

