package code.datastructure.bst;

public class BSTUtil {

  // ========== VALIDATE ==========

  public static boolean validate(final BSTNode root) {
    return BSTUtil.validateHelper(root, null, null);
  }

  private static boolean validateHelper( // set up the min and max for each node
      final BSTNode root,
      final Integer min,
      final Integer max) {

    // Base cases
    if (max != null && root.getData() > max) {
      return false;
    }

    if (min != null && root.getData() < min) {
      return false;
    }

    // Recursive cases
    if (root.getLeft() != null) {
      final boolean isLeftSubStreeValid = BSTUtil.validateHelper(
          root.getLeft(),
          min,
          root.getData());
      if (!isLeftSubStreeValid) {
        return false;
      }
    }

    if (root.getRight() != null) {
      final boolean isRightSubStreeValid = BSTUtil.validateHelper(
          root.getRight(),
          root.getData(),
          max);
      if (!isRightSubStreeValid) {
        return false;
      }
    }

    return true;
  }

}
