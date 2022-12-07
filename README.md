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

## Insertion Sort

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