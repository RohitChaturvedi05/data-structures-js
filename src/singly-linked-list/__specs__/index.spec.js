import SinglyLinkedList from '../index'


describe('SinglyLinkedList', () => {
    var list = new SinglyLinkedList()

    it('if not item exist then first and last item should be same in SLL', () => {
        list.push(10) // 1
        expect(list.head.val).toBe(10)
        expect(list.tail.val).toBe(10)
        expect(list.toArray()).toEqual([10])
    })

    it('should add items in SLL', () => {
        list.push(20) // 2
        list.push(30) // 3
        expect(list.head.val).toBe(10)
        expect(list.tail.val).toBe(30)
        expect(list.size).toEqual(3)
    })

    it('should remove items in SLL', () => {
        expect(list.pop()).toEqual(true)
        expect(list.toArray()).toEqual([10, 20])
    })

    it('should handle dequeue for empty SLL', () => {
        list.pop()
        list.pop()
        expect(list.pop()).toEqual(false)
    })

    it('should map items in SLL', () => {
        list.push(10) // 1
        list.push(20) // 2
        list.push(30) // 3

        list.map(function(value, index) {
            return value * 2
        })
        expect(list.toArray()).toEqual([20, 40, 60])
        expect(list.size).toEqual(3)
    })

    it('should handle if map Callback is not a function', () => {
        list.map(null)

        expect(list.toArray()).toEqual([20, 40, 60])
        expect(list.size).toEqual(3)
    })

    it('should reverse the list', () => {
        list.reverse()
        expect(list.toArray()).toEqual([60, 40, 20])
        expect(list.size).toEqual(3)
    })

    it('should able to get item by index', () => {
        expect(list.toArray()).toEqual([60, 40, 20])
        expect(list.get(1).val).toEqual(40)
        expect(list.get(2).val).toEqual(20)
        expect(list.get(10)).toEqual(undefined)
        expect(list.get(-1)).toEqual(undefined)
        expect(list.size).toEqual(3)
    })
    it('should able to insert item at index', () => {

        list.insert(1, 50)

        expect(list.toArray()).toEqual([60, 50, 40, 20])
        list.insert(3, 10)
        expect(list.toArray()).toEqual([60, 50, 40, 20, 10])
        expect(list.size).toEqual(5)
    })

    it('should able to set value at index', () => {

        list.set(1, 55)

        expect(list.toArray()).toEqual([60, 55, 40, 20, 10])
        expect(list.size).toEqual(5)
    })

    it('should able to shift list', () => {

        list.shift()

        expect(list.toArray()).toEqual([55, 40, 20, 10])
        expect(list.size).toEqual(4)
    })

    it('should able to Unshift list', () => {

        list.unshift(65)

        expect(list.toArray()).toEqual([65, 55, 40, 20, 10])
        expect(list.size).toEqual(5)
    })

    it('should reduce list', () => {

        const sum = list.reduce((acc, val) => {
            return acc + val
        }, 0)

        expect(sum).toEqual(190)
        expect(list.size).toEqual(5)
    })
    it('should find item in list', () => {

        const val = list.find((val, i) => i === 4)

        expect(val).toEqual(10)
        expect(list.size).toEqual(5)
    })
    it('should reset list', () => {

        list.reset()

        expect(list.size).toEqual(0)
    })
})