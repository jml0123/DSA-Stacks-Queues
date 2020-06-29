class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue(){
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
         //Remove the first item in the queue and reassign the first itme to the next
        this.first = this.first.next;
         //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value
    }
}