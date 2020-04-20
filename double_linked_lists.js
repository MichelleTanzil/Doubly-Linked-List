const util = require("util");

class DLLNode {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}
class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new DLLNode(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  }
  deleteMiddleNode() {
    if (this.head === null || this.head.next === null) return false;
    else {
      let frontRun = this.head;
      let backRun = this.tail;
      while (backRun != null && frontRun != null) {
        if (frontRun === backRun) {
          let nodeToConnectFromFront = frontRun.next;
          let nodeToConnectFromBack = frontRun.previous;
          frontRun.next = null;
          frontRun.previous = null;
          nodeToConnectFromFront.previous = nodeToConnectFromBack;
          nodeToConnectFromBack.next = nodeToConnectFromFront;
          frontRun = null;
          return true;
        } else {
          frontRun = frontRun.next;
          backRun = backRun.previous;
        }
      }
      return false;
    }
  }
  append(val, target) {
    let runner = this.head;
    while (runner != null) {
      if (runner.val === target) {
        let newNode = new DLLNode(val);
        let nodeConnect = runner.next;
        runner.next = newNode;
        newNode.previous = runner;
        newNode.next = nodeConnect;
        nodeConnect.previous = newNode;
        return true;
      } else runner = runner.next;
    }
    return false;
  }
  prepend(val, target) {
    let runner = this.head;
    while (runner != null) {
      if (runner.val === target) {
        let newNode = new DLLNode(val);
        let nodeConnect = runner.previous;
        console.log(nodeConnect)
        runner.previous = newNode
        newNode.next = runner
        newNode.previous = nodeConnect
        nodeConnect.next = newNode
        return true;
      } else runner = runner.next;
    }
    return false;
  }
}

var list = new DLL();
var ten = new DLLNode(10);
var twenty = new DLLNode(20);
list.head = ten;
list.tail = twenty;
ten.next = twenty;
twenty.previous = ten;
list.push(30);
list.push(40);
list.push(50);
// console.log(list.deleteMiddleNode())
console.log(list.prepend(5, 30))
console.log(util.inspect(list, { showHidden: false, depth: null }));
