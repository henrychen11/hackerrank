// class Node {
//   constructor(val, left = null, right = null){
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BST {
//   constructor(){
//     this.root = null;
//   }
//   addValue(val){
//     let n = new Node(val);
//     if (this.root === null)
//   }
// }


//From The Coding Train
let tree;

function setup(){
  noCanvas();
  tree = new Tree();
  let n = new Node(5);
  tree.addNode(n);
}

function Tree(){
  this.root = null;
}

Tree.prototype.addNode = function(n) {
  if (this.root === null){
    this.root = n;
  }
}

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

