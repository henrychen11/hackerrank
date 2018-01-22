//Heaps comes in 2 forms, MAX and MIN heap, the following is a MIN heap.
class MinHeap {

  constructor(){
    let capacity = 10;
    let size = 0;
    let items = new Array(capacity);
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

  hasParent(index){
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index){
    return this.items[this.getLeftChildIndex(index)];
  }

  rightChild(index){
    return this.items[this.getRightChildIndex(index)];
  }

  parent(index){
    return this.items[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo){
    let temp = this.items(indexOne);
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  ensureExtraCapacity(){
    if (this.size === this.capactiy){
      let newArray = new Array(2 * this.capacity);
      for (let i=0; i<this.size; i++){
        newArray[i] = this.size[i];
      }
      this.capacity *= 2;
    }
  }

  peek(){
    if (this.size === 0){
      return "Heap is empty!";
    }
    return this.items[0];
  }

  //extract min element (removes from array)
  poll(){
    if (this.size === 0){
      return "Heap is empty!";
    }

    let item = this.items[0];
    //move the last item into the root element
    this.items[0] = this.items[this.size - 1];
    this.size -= 1;
    //then gotta make sure everything is still in order
    this.heapifyDown();
    return item;
  }

  add(item){
    this.ensureExtraCapacity();
    this.items[this.size] = item;
    this.size += 1;
    this.heapifyUp();
  }

  heapifyUp(){
    let index = this.size - 1;
    while(this.hasParent(index) && parent(index) > this.items[index]){
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown(){
    let index = 0;
    while(this.hasLeftChild(index)){
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if(this.items[index] < this.items[smallerChildIndex]){
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }

}
