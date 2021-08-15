import Queue from '../index'


describe('Queue', () => {
    const queue = new Queue()

    it('if not item exist then first and last item should be same in queue', () => {
        queue.enqueue(10)

        expect(queue.first.val).toBe(10)
        expect(queue.last.val).toBe(10)
        expect(queue.list).toEqual([10])
    })

    it('should add items in queue', () => {
        queue.enqueue(20)
        queue.enqueue(30)
        expect(queue.first.val).toBe(10)
        expect(queue.last.val).toBe(30)
        expect(queue.list).toEqual([10, 20, 30])
        expect(queue.size).toEqual(3)
    })

    it('should remove items in queue', () => {
        expect(queue.dequeue()).toEqual(10)
        expect(queue.list).toEqual([20, 30])
        expect(queue.size).toEqual(2)
    })

    it('should handle dequeue for empty queue', () => {
        queue.dequeue()
        queue.dequeue()
        expect(queue.dequeue()).toEqual(null)
    })

    it('should map items in queue', () => {
        queue.enqueue(10)
        queue.enqueue(20)
        queue.enqueue(30)

        queue.map(function(value, index) {
            return value * 2
        })
        expect(queue.list).toEqual([20, 40, 60])
        expect(queue.size).toEqual(3)
    })

    it('should handle if map Callback is not a function', () => {
        queue.map(null)

        expect(queue.list).toEqual([20, 40, 60])
        expect(queue.size).toEqual(3)
    })

    it('should reset the queue', () => {
        queue.reset()
        expect(queue.list).toEqual([])
    })
})