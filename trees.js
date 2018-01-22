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
    if (value === this.data){
      return true;
    } else if (value < this.data){
      if (this.left === null){
        return false;
      }
    }
  }

}
