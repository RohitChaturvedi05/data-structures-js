class Node {
    constructor(val, prev = null, next = null) {
        this.val = val
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {

    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    get isEmpty() {
        return (this.length === 0 || !this.head)
    }
    get size() {
        return this.length
    }

    get(index) {
        const maxIndex = this.size - 1
        const mid = Math.floor(maxIndex / 2)

        // out of Scope
        if (index > maxIndex || index < 0) return null

        //search from back
        if (index > mid) {
            let idx = this.length - 1
            let curr = this.tail
            while (curr) {
                if (index === idx) return curr
                curr = curr.prev
                idx--
            }
            return
        }

        //search from front
        let idx = 0
        let curr = this.head
        while (curr) {
            if (index === idx) return curr
            curr = curr.next
            idx++
        }
    }

    set(index, val) {
        const node = this.get(index)
        if (node) {
            node.val = val
        }
        return Boolean(node)
    }

    insert(index, val) {
        const maxIndex = this.size - 1
        // out of Scope
        if (index > maxIndex || index < 0) return false
        if (index === 0) {
            this.unshift(val)
            return true
        }
        if (index === maxIndex) {
            this.push(val)
            return true
        }

        const currNode = this.get(index)
        const prevNode = currNode.prev
        const node = new Node(val, prevNode, currNode)
        prevNode.next = node
        this.length++
        return true
    }

    reset() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        const node = new Node(val, this.tail)

        if (this.isEmpty) {
            this.tail = node
            this.head = this.tail
        }
        if (this.length > 0) {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        if (this.isEmpty) return
        const poppedNode = this.tail
        if (this.length === 1) {
            this.reset()
            poppedNode.prev = null
            return poppedNode
        }

        const prev = this.tail.prev
        const val = prev.val
        this.tail = prev
        this.tail.next = null
        poppedNode.prev = null
        this.length--

        if (this.length === 1) {
            this.head = this.tail
        }
        return poppedNode
    }

    reverse() {
        if (this.isEmpty) return
        const size = this.length - 1
        let node = this.tail

        let prev = null
        let next = null

        for (let index = size; index >= 0; index--) {
            prev = node.prev
            next = node.next

            node.prev = next
            node.next = prev

            if (index === size) {
                this.head = node
            }
            if (index === 0) {
                this.tail = node
            }
            node = node.next
        }
        return this
    }

    remove(removeIndex) {
        const maxIndex = this.length - 1
        if (this.isEmpty || (removeIndex > maxIndex)) return

        if (removeIndex === 0) {
            return this.shift()
        }
        if (removeIndex === maxIndex) {
            return this.pop()
        }

        const node = this.get(removeIndex)
        const prevNode = node.prev
        const nextNode = node.next

        prevNode.next = nextNode
        nextNode.prev = prevNode

        this.length--
        return node
    }

    shift() {
        if (this.isEmpty) return
        const poppedNode = this.head

        if (this.length === 1) {
            this.reset()
            poppedNode.next = null
            return poppedNode
        }

        this.head = poppedNode.next
        this.head.prev = null
        this.length--

        poppedNode.next = null

        return poppedNode
    }

    unshift(val) {
        const node = new Node(val, null, this.head)

        if (this.length === 0) {
            this.push(val)
        } else {
            this.head.prev = node
            this.head = node
            this.length++
        }
        return this
    }

    // ======== Util methods ======== 
    /**
     * A function that accepts up to three arguments. 
     * forEach calls the callbackfn function one time for each element in the list.
     * Performs the specified action for each element in an list.
     * Returns list
     */
    forEach(callBack, reverse = false) {
        if (!callBack) return

        if (reverse) {
            let index = this.length
            let curr = this.tail
            while (curr) {
                callBack(curr, index, this)
                curr = curr.next
                index--
            }
            return this
        }

        let index = 0
        let curr = this.head
        while (curr) {
            callBack(curr, index, this)
            curr = curr.next
            index++
        }

        return this
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
     * Calls the specified callback function for all the elements in an list. The return val of the callback function is the accumulated result, 
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

    toArray() {
        return this.reduce((acc, val) => {
            acc.push(val)
            return acc
        }, [])
    }
}



/**
 * -----------------------------
 *          Samples
 * -----------------------------
 */

var list = new DoublyLinkedList()
// list.push(10) // 1
// list.push(20) // 2
// list.push(30) // 3
// list.push(40) // 3
// list.push(50) // 3
// list.push(60) // 3
// list.reverse()
// list.toArray()
// list.remove(1)
// list.toArray()
// list.size

// list.forEach((node, index) => console.log(index, node))
// list.map((val, index) => val * 10)
// console.log(list.toArray())
// console.log('get', list.get(2))
// console.log('set', list.set(1, 33))
// console.log('insert', list.insert(4, 43))
// console.log('remove', list.remove(4))
console.log(list.toArray())
const listx = list.unshift(11)
console.log(list)