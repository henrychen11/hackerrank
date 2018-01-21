class linkedList {
  constructor(val){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  getLength(){
    return this.count;
  }

  addLast(data){
    //this creates a new node
    const node = {
      data: data,
      next: null
    };
  }

}
