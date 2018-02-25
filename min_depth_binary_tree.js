/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    //travers down left and right, adding to counter each time. Then if left count > right count, return left , else return right
    if (!root) return 0;
    if( root.left ===null && root.right===null) return 1;

    let minCount = Number.MAX_SAFE_INTEGER;

    const helper = function (node, count){
        // when this condition is met, you've reached a leaf
        if (node.left === null && node.right===null) {
            if (count < minCount){
                minCount = count;
            }
            return;
        }

        if( node.left !== null){
            helper(node.left, count+1);
        }

        if( node.right !== null){
            helper(node.right, count+1);
        }
    }

    if( root.left !== null){
            helper(root.left, 2);
        }
    if( root.right !== null){
            helper(root.right, 2);
        }

    return minCount;
};
