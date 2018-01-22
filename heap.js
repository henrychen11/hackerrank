//Heaps comes in 2 forms, MAX and MIN heap, the following is a MIN heap.
class MinHeap {

  constructor(){
    let capacity = 10;
    let size = 0;
  }

  getLeftChildIndex(parentIndex){
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex){
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex){
    return (childIndex - 1) / 2;
  }

  hasLeftChild(index){
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index){
    return this.getRightChildIndex(index) < this.size;
  }

  

}
