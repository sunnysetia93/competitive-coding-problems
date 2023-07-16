/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if(!node) return null;

  const map = {};
  const clone = root => {
    if(map[root.val]){
      return map[root.val];
    }
    else{
      map[root.val] = new Node(root.val);
      map[root.val].neighbors = root.neighbors.map(n => clone(n));
      return map[root.val];
    }
  }

  return clone(node);
};
