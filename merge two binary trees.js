var mergeTrees = function(t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;

    const newHead = new TreeNode(t1.val + t2.val);
    newHead.left = mergeTrees(t1.left, t2.left);
    newHead.right = mergeTrees(t1.right, t2.right);

    return newHead;

};
