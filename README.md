# Data Structures

## Overview

This repository contains solutions to the Blind-75 problems. Below are the concepts and their definitions that will be useful in solving these problems.

### Hash maps

Hash maps are common data structures used to store key-value pairs for efficient retrieval. 

Hashmap data structures use hash functions which turns a key into an index within an underlying array. The hash function can be used to access an index when inserting a value or retrieving a value from a hash map. 

### Stack

Stack is a linear data structure which follows a particular order in which operations are performed. The order may be FILO (First In Last Out). 

## Searching Algorithms

### Binary Search

Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. 

```
function binarySearch(arr: number[], val: number): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }
    if (arr[mid] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function binarySearchRecursive(
  arr: number[],
  val: number,
  start = 0,
  end = arr.length - 1
): number {
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    return mid;
  }
  if (start >= end) {
    return -1;
  }
  return val < arr[mid]
    ? binarySearchRecursive(arr, val, start, mid - 1)
    : binarySearchRecursive(arr, val, mid + 1, end);
}

```

## Sorting Algorithms

### Insertion Sort

```
type InsertionSortT = (arr: number[]) => number[];

let newArr: number[] = [];

function insertionSort(arr: number[]): number[] {
  if (arr.length > 0) {
    function findMinAndRemove(arr: number[]): number[] {
      let min = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
        }
      }
      newArr.push(min);
      arr.splice(arr.indexOf(min), 1);
      return insertionSort(arr);
    }
  } else {
    return newArr;
  }
  return findMinAndRemove(arr);
}
```

## Linked Lists

A linked list is a linear data structure similar to an array. Each element is a separate object
that contains a pointer to the next object in that list. Each element contains two items: The data stored and the link to the next node. 

The entry point to a linked list is called a head. The last node on this list points to null. If a list is empy, the head is a null reference. 

This is what a linked list looks like in Javascript:

```
const list = {
  head: {
    value: 6
    next: {
      value: 10
      next: {
        value: 12
        next: {
          value: 3
          next: null
        }
      }
    }
  }
}
```

An advantage of a linked list is that nodes can easily be removed or added from a linked list without re-organizing the entire data structure. 

A disadvantage is that search operations are slow. Nodes are accessed sequentially starting from the first node. It also uses more memory that arrays because of the storage of pointers.

### Implementing a list node:

```
class ListNode {
  constructir(data) {
    this.data = data
    this.next = null
  }
}
```

### Implementing a linked list:

```
class LinkedList {
  constructor(head=null) {
    this.head = head
  }
}
```

### Putting it all together

```
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);
```

### Adding methods to a linked list

#### size()

```
size() {
  let count = 0;
  let node = this.head;
  while(node) {
    count++;
    node = node.next;
  }
  return count;
}
```

#### clear()

```
clear() {
  this.head = null;
}
```

#### getLast()

```
getLast() {
  let lastNode = this.head;
  if(lastNode) {
    while(lastNode.next) {
      lastNode = lastNode.next;
    }
  }
}
```

#### getFirst() 

```
getFirst() {
  return this.head;
}
```

## Two-pointer technique

These kind of problems usually involve two pointers: one slow-runner and the other fast-runner.

Another variation is for one pointer to start from the beginning and the other from the end. 
They move toward each other until they meet. 

A typical example is reversing the elements in a string.

Without using the two-pointer problem, this is one solution:

```
function swap(str: string[], i: number, j: number) {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
}

function reverse(str: string[]) {
  let { length } = str;

  for (let n = 0; n < length / 2; n++) {
    console.log(str);
    swap(str, n, length - 1 - n);
  }

  return str;
}
```

Using the two-pointers:

```
function reverse(str: string[]) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    swap(str, i, j);
    i++;
    j--;
  }
  return str;
}
```

## Stack and Queue

### Queue

The first element added to the queue will be processed first. Insert operation is called enqueue and the delete operation is called dequeue. (FIFO)

```
interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

class Queue<T> implements IQueue<T> {
  private storage: T[];
  front: number;
  back: number;

  constructor() {
    this.storage = [];
    this.front = 0;
    this.back = 0;
  }

  enqueue(item: T): void {
    this.storage[this.back] = item;
    this.back++;
  }
  dequeue(): T {
    const item = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return item;
  }
  size(): number {
    return this.back - this.front;
  }
  peek(): T {
    return this.storage[this.front];
  }
  isEmpty() {
    return this.back === 0;
  }
}


const queue = new Queue<string>();
queue.enqueue("A");
queue.enqueue("B");
```

Circular Queue sample implementation

This type of queue is more memory efficient unlike the simple queue. Here, the last position is connected to the first position.

Let's say we have a full simple queue -> [1,2,3,4,5]

If we dequeue, it would look like this -> [,2,3,4,5]

There's a vacant space at the front but we cannot enqueue anymore. One benefit of circular queue
is we can make use of the space at the front. In a normal queue, once the queue becomes full and we dequeue an element, we still cannot insert even if there is space at the front. 

Rules:

Implement the MyCircularQueue class:

MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.

```
class MyCircularQueue {
  element: number[];
  size: number;
  length: number;
  front: number;
  back: number;
  constructor(k: number) {
    this.element = [];
    this.size = k;
    this.length = 0;
    this.front = 0;
    this.back = -1;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.back++;
    this.element[this.back % this.size] = value;
    this.length++;
    return true;
  }
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.element[this.front % this.size] = null;
    this.front++;
    this.length--;
    return true;
  }
  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.element[this.front % this.size];
  }
  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.element[this.back % this.size];
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  isFull(): boolean {
    return this.length === this.size;
  }
}
```

### Stack

A data structure described as LIFO. An item that was added last will be retrieved first. 

```
interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity");
    }
    this.storage.push(item);
  }
  pop(): T | undefined {
    return this.storage.pop();
  }
  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }
  size(): number {
    return this.storage.length;
  }
}

const stack = new Stack<string>();
stack.push("A");
stack.push("B");
```