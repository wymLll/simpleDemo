/**
 * 广度遍历二叉树
 * 使用queue来实现
 */

let bfs = function(root) { //非递归实现
  let res = [];
  let queue = [];
  queue.push(root);
  let pointer = 0;
  while (pointer < queue.length) {
    let node = queue[pointer++];
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};

{
  //递归实现
  let res = [];
  let queue = [root];
  let bfs = function(index) {
    index = index || 0;
    if (queue[index]) {
      res.push(queue[index].val);
      let left = queue[index].left;
      let right = queue[index].right;
      if (left) queue.push(left);
      if (right) queue.push(right);
      bfs(++count);
    }
  };
}

/**
 * 深度遍历二叉树
 *
 * 先中后序递归遍历
 * 非递归遍历: 使用stack来实现
 */

let preOrder = function(node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
};

let postOrder = function(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
};
let midOrder = function(node) {
  if (node) {
    midOrder(node.left);
    console.log(node.value);
    midOrder(node.right);
  }
};

let preDfs = function(root) {
  let res = [];
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    res.push(node);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return res;
};


