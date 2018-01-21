class linkedList {
  constructor(val){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  getLength(){
    return this.count;
  }

  addFirst(data){
    const node = {
      data: data,
      next: null
    };
    //save the first node
    const temp = this.head;

    //set new node to head
    this.head = node;

    //add the rest of the nodes (linkedlists) after first node
    this.head.next = temp;

    //increment the length
    this.count += 1;

    //if first node, point to itself as well
    if (this.count === 1){
      this.tail = this.head;
    }
  }

  addLast(data){
    //this creates a new node
    const node = {
      data: data,
      next: null
    };
    // the "this" is referring to the LinkedList
    if (this.count === 0){
      //If this is the first node, then assign to head
      this.head = node;
    } else {
      //If not, then link it to the last node
      this.tail.next = node;
    }
    this.tail = node;
    //increments the length of the list
    this.count += 1;
  }

  removeFirst(data){
    if (this.count > 0){
      //the head should point to the second element
      this.head = this.head.next;
      this.count -= 1;

      //set tail to null if list is empty
      if (this.count === 0){
        this.tail = null;
      }
    }
  }

  removeLast(data){
    if (this.count > 0){
      //if there is only 1 node in list, then set null to head and tail
      if(this.count === 1){
        this.head = null;
        this.tail = null;
      } else {
        //find the node right before the last node
        let current = this.head;
        while (current.next !== this.tail){
          current = current.next;
        }
        //after finding the "last" current
        current.next = null;
        this.tail = current;
      }
      //decrease the count by 1
      this.count -= 1;
  }
}
