const assert = require("assert");
const { swapNodes } = require("../index");
const {
  LinkedList,
  ListNode,
  createLinkedList,
  toArray,
} = require("../linkedLists");

describe("swap nodes tests", () => {
  it("test case #1 - swap positions 3 and 4", () => {
    let arr = [3, 4, 5, 2, 6, 1, 9];
    let leftIdx = 3;
    let rightIdx = 4;
    let solution = [3, 4, 5, 6, 2, 1, 9];
    let list = createLinkedList(arr);
    let output = swapNodes(list, leftIdx, rightIdx);
    assert.deepEqual(toArray(output), solution);
  });

  it("test case #2 - swap positions 2 and 4", () => {
    let arr = [3, 4, 5, 2, 6, 1, 9];
    let leftIdx = 2;
    let rightIdx = 4;
    let solution = [3, 4, 6, 2, 5, 1, 9];
    let list = createLinkedList(arr);
    let output = swapNodes(list, leftIdx, rightIdx);
    assert.deepEqual(toArray(output), solution);
  });

  it("test case #3 - swap positions 0 and 1", () => {
    let arr = [3, 4, 5, 2, 6, 1, 9];
    let leftIdx = 0;
    let rightIdx = 1;
    let solution = [4, 3, 5, 2, 6, 1, 9];
    let list = createLinkedList(arr);
    let output = swapNodes(list, leftIdx, rightIdx);
    assert.deepEqual(toArray(output), solution);
  });
});