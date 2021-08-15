# Data Structures js
This repository contains some common useful data structure for javascript.

## Big O Notation
Big O notation is a way to describe the space or time complexity of a given algorithm.

In following table Big O notations are arrange from best to worst case.
Notation (Time)     | Growth        | Description
-------------       | ------------- | -------------
`O(1)`              | Constant      |  Such operations takes constant time as number of items (n) grows
`O(log n)`          | Logarithmic   |  Such operations takes time initially but after some time they almost become constant time as number of items (n) grows
`O(n)`              | Linear        |  Such operations takes linear time as number of items (n) grows
`O(n^2)` or `O(n^c)`| Polynomial    |  Such operations takes more time as number of items (n) grows
`O(n^n)`            | Exponential   |  Such operations takes exponential time as number of items (n) grows
`O(n!)`             | factorial     |  Such operations are the worst of the worst

(n = size of input, c = some constant)

> Useful links 
- [MIT Lecture on Big O](https://web.mit.edu/16.070/www/lecture/big_o.pdf)
- [Basic understanding of Big O](https://www.digitalocean.com/community/tutorials/js-big-o-notation/)
- [Factorial Time Complexity](https://jarednielsen.com/big-o-factorial-time-complexity/)


## Installation
```
npm install data-structures-js
```

## Stack
Stack is a data structure which maintains list of element. It worked in LIFO (Last In First Out). 

Stacks are useful in scenarios where we need quick insertion and deletions with constant time complexity of `O(1)`.
we can always use `Array` to create the stack but for such stack will have a linear time `O(n)` complexity for insertion and deletions, as after inserting/removing a item we need to re-index all remaining items.

**Example** - If you a pile of books on your desk and if you need to add (or push) a book in the pile then you can add it on the top, similarly if you need to remove a book then you can remove (or pop) them only from the top. (unless you wanna make a mess)

> Useful links 
- [Javascript-stack](https://www.javascripttutorial.net/javascript-stack/)

### Basic Usage
```js
import Stack from 'data-structures-js/stack'

const stack = new Stack()

stack.push(10)
stack.push(20)

stack.pop() // output: 20
```
### Properties/Methods

Name            | Usage                                     | Time Complexity      | Description
-------------   | -------------                             | -------------        | -------------
first           | `stack.first`                             |  `O(1)`              | to get first item
last            | `stack.last`                              |  `O(1)`              | to get last item
size            | `stack.size`                              |  `O(1)`              | to get size of stack
list            | `stack.list`                              |  `O(n)`              | to get list of items as array
push            | `stack.push(value)`                       |  `O(1)`              | to add/push a item in stack
pop             | `stack.pop()`                             |  `O(1)`              | to remove/pop a item from the top
toArray         | `stack.toArray()`                         |  `O(n)`              | to get list of items as array
map             | `stack.map((value,index)=> value*10)`     |  `O(n)`              | to get list of items as array


### Queue

### Singly Linked list

### Doubly Linked List

### Binary Search Tree