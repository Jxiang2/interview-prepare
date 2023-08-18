package code.datastructure.bst;

public class BinarySearchTree {

  private BSTNode root;

  // ========== INSERT ==========

  public void insert(final int data) {
    this.root = insertHelper(this.root, new BSTNode(data));
  }

  private BSTNode insertHelper(final BSTNode root, final BSTNode nodeToInsert) {
    final int dataToInsert = nodeToInsert.getData();

    if (root == null) {
      return nodeToInsert;
    } else {
      if (dataToInsert < root.getData()) {
        root.setLeft(insertHelper(root.getLeft(), nodeToInsert));
      }

      else if (dataToInsert > root.getData()) {
        root.setRight(insertHelper(root.getRight(), nodeToInsert));
      }

      else {
        throw new IllegalArgumentException("Duplicate data");
      }

      return root;
    }
  }

  // ========== REMOVE ==========

  public void remove(final int data) {
    if (search(data) == null) {
      throw new IllegalArgumentException("Data not found");
    }

    removeHelper(this.root, data);
  }

  private BSTNode removeHelper(BSTNode root, final int toRemoveData) {
    if (root == null) {
      return null;
    }

    if (toRemoveData < root.getData()) {
      root.setLeft(removeHelper(root.getLeft(), toRemoveData));
    }

    else if (toRemoveData > root.getData()) {
      root.setRight(removeHelper(root.getRight(), toRemoveData));
    }

    else { // Node to remove found
      if (root.getLeft() == null && root.getRight() == null) { // Base case: no children
        root = null;
      }

      else if (root.getRight() != null) {
        final int successor = successor(root);
        root.setData(successor); // replace with successor
        root.setRight(removeHelper(root.getRight(), successor)); // remove successor in right subtree
      }

      else if (root.getLeft() != null) {
        final int predecessor = predecessor(root);
        root.setData(predecessor); // replace with predecessor
        root.setLeft(removeHelper(root.getLeft(), predecessor)); // remove predecessor in left subtree
      }
    }

    System.out.println("In removeHelper------");
    if (root != null) {
      System.out.println("root.getData() = " + root.getData());
    } else {
      System.out.println("root.getData() = null");
    }

    return root;
  }

  private int successor(BSTNode root) { // least value below right child of current root
    root = root.getRight();
    while (root.getLeft() != null) {
      root = root.getLeft();
    }
    return root.getData();
  }

  private int predecessor(BSTNode root) { // greatest value below left child of current root
    root = root.getLeft();
    while (root.getRight() != null) {
      root = root.getRight();
    }
    return root.getData();
  }

  // ========== SEARCH ==========

  public BSTNode search(final int data) {
    return searchHelper(this.root, data);
  }

  private BSTNode searchHelper(final BSTNode root, final int data) {
    if (root == null) {
      return null;
    }

    if (data == root.getData()) {
      return root;
    }

    if (data < root.getData()) {
      return searchHelper(root.getLeft(), data);
    }

    return searchHelper(root.getRight(), data);
  }

  // ========== PRINT ==========

  public void display() {
    displayHelper(root);
  }

  private void displayHelper(final BSTNode root) {
    if (root != null) {
      displayHelper(root.getLeft());
      System.out.println(root.getData());
      displayHelper(root.getRight());
    }
  }

  public static void main(final String[] args) {
    final BinarySearchTree tree = new BinarySearchTree();

    tree.insert(5);
    tree.insert(1);
    tree.insert(9);
    tree.insert(2);
    tree.insert(7);
    tree.insert(3);
    tree.insert(6);
    tree.insert(4);
    tree.insert(8);

    tree.remove(3);

    tree.display();

  }

}
