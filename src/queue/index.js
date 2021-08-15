class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

export default class Queue {

    constructor() {
        this._head = null
        this._tail = null
        this._size = 0
    }

    get size() {
        return this._size
    }
    get first() {
        return this._head
    }
    get last() {
        return this._tail
    }
    get list() {
        return this.toArray()
    }

    reset() {
        this._head = null
        this._tail = null
        this._size = 0
    }

    enqueue(val) {
        const node = new Node(val)
        if (this._size === 0) {
            this._head = node
            this._tail = node
        }
        const currTail = this._tail
        currTail.next = node
        this._tail = node
        return ++this._size
    }

    dequeue() {
        if (this._size === 0) return null
        const currhead = this._head

        if (this._size === 1) {
            this.reset()
            return currhead.val
        }
        this._head = currhead.next
        this._size--
        return currhead.val
    }

    toArray() {
        let returnArr = []
        let node = this._head
        if (this._size === 0) {
            return []
        }
        if (this._size === 1) {
            return [this._head.val]
        }
        while (node) {
            returnArr.push(node.val)
            node = node.next
        }
        return returnArr
    }

    map(callBack) {
        if (typeof callBack !== 'function') return this
        let index = 0
        let node = this._head
        while (node) {
            node.val = callBack(node.val, index, this)
            node = node.next
            index++
        }
        return this
    }
}