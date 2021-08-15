import BinarySearchTree from '../index'


describe('BinarySearchTree', () => {
    var bst = new BinarySearchTree()

    it('should insert items in BST as per there order', () => {
        bst.insert(10)
        bst.insert(7)
        bst.insert(15)
        bst.insert(16)
        bst.insert(5)
        bst.insert(12)
        bst.insert(4)
        bst.insert(12)
        bst.insert(12)
        expect(bst.root.val).toBe(10)
    })

    it('should able to find item with val', () => {

        const foundNode = bst.find(12)
        expect(foundNode.val).toBe(12)
        expect(foundNode.count).toBe(3)
    })
})