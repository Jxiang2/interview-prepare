package code.datastructure.bst;

public class BSTNode {

  private int data;

  private BSTNode left;

  private BSTNode right;

  public BSTNode(final int data) {
    this.data = data;
  }

  public int getData() {
    return data;
  }

  public void setData(final int data) {
    this.data = data;
  }

  public BSTNode getLeft() {
    return left;
  }

  public void setLeft(final BSTNode left) {
    this.left = left;
  }

  public BSTNode getRight() {
    return right;
  }

  public void setRight(final BSTNode right) {
    this.right = right;
  }

}
