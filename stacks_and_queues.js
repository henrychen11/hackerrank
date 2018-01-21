//This is the array implementation
class Stack {
  constructor(){
    this.items = [];
    this.count = 0;
  }

  getLength(){
    return this.count;
  }

  push(item){
    this.items.push(item);
    this.count = this.count + 1;
  }

  pop(){
    if (this.count > 0){
      this.count -= 1;
    }

    return this.items.pop();
  }

  peek(){
    return this.items.slice(-1)[0];
  }
}

//this is the linked list implementation
import linkedList from './linked_list.js';

class StackLinkedList {
  constructor(){
    this.list = new linkedList;
  }

  push(item){
    this.list.addFirst(item);
  }

  pop(){
    if (this.list.length === 0){
      return 'Empty List';
    }

    let val = this.list.head.data;
    this.list.removeFirst();
    //return the val to confirm success removal
    return val;
  }

  peek(){
    if (!this.list.head){
      return;
    }
    //return head if there is a head
    return this.list.head.data;
  }

  getLength(){
    return this.list.length;
  }
}
