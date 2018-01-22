class Node {
  constructor(data, left=null, right=null){
    this.left = left;
    this.right = right;
    this.data = data;
  }

  insert(value){
    if (value <= this.data){
      if (this.left === null){
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null){
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value){
    let current = this.root;
    
    while(current){
      if (this.data === current.data){
        return true;
      }
      if (this.data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

}
