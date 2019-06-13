/**
 * 中序遍历: left->root->right
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  var res = [];
  intraversal(res,root);
  return res;
};

function intraversal(res,root) {
  if (root) {
    intraversal(res, root.left);
    res.push(root.val);
    intraversal(res, root.right);
  }
}

/**
 * 先序遍历：
    res.push(root.val);
    intraversal(res, root.left);
    intraversal(res, root.right);
 */
/**
 * 后序遍历：
    intraversal(res, root.left);
    intraversal(res, root.right);
    res.push(root.val);
 */