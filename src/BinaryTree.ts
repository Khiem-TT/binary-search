import {Tree} from "../interface/Tree";
import {TreeNode} from "../TreeNode";

export class BinaryTree<E> implements Tree<E> {
    root: TreeNode<E> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize(): number {
        return this.totalNode;
    }

    inorder(node: TreeNode<E>) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                return this.inorder(node.left);
            }
            if (node.right) {
                return this.inorder(node.right);
            }
        }
    }

    insert(data: E): TreeNode<E> {
        if (!this.root) {
            this.root = new TreeNode<E>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else if (data > currentNode.right) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }
}