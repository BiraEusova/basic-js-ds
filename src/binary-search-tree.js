const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  _root = null;

  root() {
    return this._root;
  }

  add( data ) {
    if (!this._root) {
      this._root = new Node(data);
      return;
    }

    let current = this._root;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = new Node(data);
          break;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = new Node(data);
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }

  has( data ) {
    let current = this._root;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find( data ) {
    let current = this._root;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  remove( data ) {
    function _findMinNode(node) {
      while (node && node.left) {
        node = node.left;
      }
      return node;
    }

    function _removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = _removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = _removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }

        let minRight = _findMinNode(node.right);
        node.data = minRight.data;
        node.right = _removeNode(node.right, minRight.data);
        return node;
      }
    }

    this._root = _removeNode(this._root, data);
  }

  min() {
    let current = this._root;
    while (current && current.left) {
      current = current.left;
    }
    return current ? current.data : null;
  }

  max() {
    let current = this._root;
    while (current && current.right) {
      current = current.right;
    }
    return current ? current.data : null;
  }
}

module.exports = {
  BinarySearchTree
};