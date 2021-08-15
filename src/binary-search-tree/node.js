export default class Node {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
        this.count = 1
    }
    incrementCount() {
        this.count += 1
    }
}