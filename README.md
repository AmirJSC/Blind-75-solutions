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