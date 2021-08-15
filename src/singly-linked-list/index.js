class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

export default class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    /**
     * Remove item from the bottom of the list
     */
    pop() {
        if (!this.head || !this.tail) {
            return
        }
        return this.remove(this.length - 1)
    }
    /**
     * Push item at the bottom of the list
     */
    push(val) {
        const node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
            this.length++

            return this.length
        }
        this.tail.next = node
        this.tail = node
        this.length++

        return this.length
    }
    /**
     * remove a node on specified index
     */
    remove(index) {
        if (index >= this.length || index < 0) return false

        const curr = this.get(index)
        const prev = this.get(index - 1)
        prev.next = curr.next
        this.length--

        return true
    }

    /**
     * reverse can change the direction of list
     * 10 => 20 => 30 => 40
     * 10 <= 20 <= 30 <= 40
     * @returns list
     */
    reverse() {
        if (!this.head || this.length === 0) return this

        let curr = this.head
        let prev = null
        let index = 0

        while (curr) {
            const temp = Object.assign({}, curr)
            curr.next = prev
            prev = curr
            if (index === 0) {
                this.tail = prev
            }
            if (index === this.length - 1) {
                this.head = curr
            }
            curr = temp.next
            index++
        }
        return this
    }

    /**
     * Remove head and move it to next node
     */
    shift() {
        if (!this.head) return

        const currHead = this.head
        this.head = currHead.next

        //Reached at the end
        if (!this.head) {
            this.tail = null
            this.head = null
            this.length = 0
            return null
        } else {
            this.length--
        }

        return this
    }

    /**
     * push a item on the top/head
     */
    unshift(val) {
        const node = new Node(val, this.head)
        if (!this.head) {
            this.tail = node
        }
        this.head = node
        this.length++
        return this
    }
    /**
     * get return node on specified index
     */
    get(index) {
        if (this.length === 0 || index > this.length || index < 0) return
        let i = 0;
        let curr = this.head
        while (curr) {
            if (i === index) {
                return curr
            }
            curr = curr.next
            i++
        }
        return undefined
    }
    /**
     * set can update value of node on given index
     */
    set(index, newVal) {
        const node = this.get(index)
        if (node) {
            node.val = newVal
            return true
        }
        return false
    }

    /**
     * insert accept two parameters index & value, insert can append a node with specified value on given index
     * Return true is value inserted otherwise false 
     */
    insert(index, val) {
        if (index >= this.length || index < 0 || index == undefined) return false

        if (index === 0) {
            return Boolean(this.unshift(val))
        }
        if (index === this.length - 1) {
            return Boolean(this.push(val))
        }

        const curr = this.get(index)
        const prevItem = this.get(index - 1)
        const node = new Node(val, curr)
        prevItem.next = node
        this.length++
        return true
    }

    /** 
     * find calls predicate once for each element of the list, in ascending order, until it finds one where predicate returns true. 
     * If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
     * 
     * Returns the value of the first element in the list where predicate is true, and undefined otherwise.
     */
    find(callBack) {
        if (!callBack) return
        let item = this.head
        let index = 0

        while (item !== null) {
            const result = callBack(item.val, index)
            if (result) {
                return item.val
            }
            index++
            item = item.next
        }
        return
    }

    /**
     * Returns a array with values of list
     * Returns a array
     */
    toArray() {
        return this.reduce((acc, val) => {
            acc.push(val)
            return acc
        }, [])
    }

    /**
     * A function that accepts up to two arguments. 
     * The map method calls the callbackfn function one time for each element in the list.
     * Calls a defined callback function on each element of an list, and returns an list that contains the results.
     * Returns list
     */
    map(callBack) {
        if (!callBack) return
        let index = 0
        let curr = this.head
        while (curr) {
            curr.val = callBack(curr.val, index)
            curr = curr.next
            index++
        }
        return this
    }

    /**
     * The reduce method calls the callbackfn function one time for each element in the list.
     * Calls the specified callback function for all the elements in an list. The return value of the callback function is the accumulated result, 
     * and is provided as an argument in the next call to the callback function.
     * Returns list
     */
    reduce(callBack, initialValue) {
        if (!callBack || initialValue === undefined) return
        let index = 0
        let curr = this.head
        let acc = initialValue
        while (curr) {
            acc = callBack(acc, curr.val, index)
            curr = curr.next
            index++
        }
        return acc
    }
}

// ===========Samples================
var list = new SinglyLinkedList()
list.push(10) // 1
list.push(20) // 2
list.push(30) // 3
list.push(40) // 4
list.push(50) // 5
// console.log(list)
// list.reverse()
// list.map(x => x * 2)
// list.find(val => val === 30)
// list.insert(4, 45)
list.map(x => x * 2)
console.log(list.toArray())
const result = list.reduce((acc, val) => {
    acc += val
    return acc
}, 0)
console.log('Sum', result)
list.reverse()
console.log(list.toArray())