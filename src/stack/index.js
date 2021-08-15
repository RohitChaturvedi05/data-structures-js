class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

export default class Stack {

    constructor() {
        this._first = null
        this._last = null
        this._size = 0
    }

    get size() {
        return this._size
    }
    get first() {
        return Object.freeze(this._first)
    }
    get last() {
        return Object.freeze(this._last)
    }
    get list() {
        return this.toArray()
    }

    reset() {
        this._first = null
        this._last = null
        this._size = 0
    }

    push(val) {
        const node = new Node(val, this._first)
        if (this._size === 0) {
            this._first = node
            this._last = node
        }
        this._first = node
        return ++this._size
    }

    pop() {
        if (this._size === 0) return null
        const currFirst = this._first

        if (this._size === 1) {
            this.reset()
            return currFirst.val
        }
        this._first = currFirst.next
        this._size--
        return currFirst.val
    }

    toArray() {
        let returnArr = []
        let node = this._first
        while (node) {
            returnArr.push(node.val)
            node = node.next
        }
        return returnArr
    }
    map(callBack) {
        if (typeof callBack !== 'function') return this
        let index = 0
        let node = this._first
        while (node) {
            node.val = callBack(node.val, index, this)
            node = node.next
            index++
        }
        return this
    }
}

/**
 * ===============================
 *          Samples
 * ===============================
 */

const stack = new Stack()

console.log(stack.push(10))
console.log(stack.push(20))
console.log(stack.push(30))
console.log(stack.toArray())
console.log('stack.size', stack.size)
console.log('stack.list', stack.list)
// stack.map(val => val * 10)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.toArray())
console.log(stack.first)
stack.first.val = null
console.log(stack)