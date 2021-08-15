# Data Structures js
This repo contains some common useful data structure for javascript.

## Stack
    Stack is a data structure which maintains list of element. It worked in LIFO (Last In First Out). 

    **Example** - If you a pile of books on your desk and if you need to add (or push) a book in the pile then you can add it on the top, similarly if you need to remove a book then you can remove (or pop) them only from the top. (unless you wanna make a mess)

### Basic Usage
```
import Stack from 'data-stractures-js/stack'

const stack = new Stack()

stack.push(10)
stack.push(20)

stack.pop() // output: 20
```
### Properties/Methods

Name            | Usage                                     | Time Complexcity     | Description
-------------   | -------------                             | -------------        | -------------
first           | `stack.first`                             |  `O(1)`              | to get first item
last            | `stack.last`                              |  `O(1)`              | to get last item
size            | `stack.size`                              |  `O(1)`              | to get size of stack
list            | `stack.list`                              |  `O(n)`              | to get list of items as array
push            | `stack.push(value)`                       |  `O(1)`              | to add/push a item in stack
pop             | `stack.pop()`                             |  `O(1)`              | Use to remove/pop a item from the top
toArray         | `stack.toArray()`                         |  `O(n)`              | to get list of items as array
map             | `stack.map((value,index)=> value*10)`     |  `O(n)`              | to get list of items as array


##

### Queue

### Singly Linked list

### Doubly Linked List

### Binary Search Tree