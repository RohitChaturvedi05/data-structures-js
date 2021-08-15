import Stack from '../index'


describe('Stack', () => {
    const stack = new Stack()

    it('if not item exist then first and last item should be same in stack', () => {
        stack.push(10)

        expect(stack.first.val).toBe(10)
        expect(stack.last.val).toBe(10)
        expect(stack.list).toEqual([10])
    })

    it('should add items in stack', () => {

        stack.push(20)
        stack.push(30)
        expect(stack.first.val).toBe(30)
        expect(stack.last.val).toBe(10)
        expect(stack.list).toEqual([30, 20, 10])
        expect(stack.size).toEqual(3)
    })

    it('should remove items in stack', () => {
        expect(stack.pop()).toEqual(30)
        expect(stack.list).toEqual([20, 10])
        expect(stack.size).toEqual(2)
    })

    it('should handle pop for empty stack', () => {
        stack.pop()
        stack.pop()
        expect(stack.pop()).toEqual(null)
    })

    it('should map items in stack', () => {
        stack.push(10)
        stack.push(20)
        stack.push(30)

        stack.map(function(value, index) {
            return value * 2
        })
        expect(stack.list).toEqual([60, 40, 20])
        expect(stack.size).toEqual(3)
    })

    it('should handle if map Callback is not a function', () => {
        stack.map(null)

        expect(stack.list).toEqual([60, 40, 20])
        expect(stack.size).toEqual(3)
    })

    it('should reset the stack', () => {
        stack.reset()
        expect(stack.list).toEqual([])
    })
})