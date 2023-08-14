package code.graph;

import java.util.List;
import java.util.Stack;

/**
 * Depth-first search.
 * use a stack
 */
public class DFS<T> {

  private void traverse(final Node<T> root) {
    final Stack<Node<T>> stack = new Stack<>();

    stack.add(root);

    while (!stack.isEmpty()) {
      final Node<T> node = stack.pop();

      if (!node.isVisited()) {
        node.setVisited(true);

        // Process ...
        System.out.println(node);

        node.getNeighbors().forEach(stack::push);
      }
    }
  }

  private void recursiveTraverse(final Node<T> root) {
    root.setVisited(true);

    // Process ...
    System.out.println(root);

    root.getNeighbors().forEach(neighbor -> {
      if (!neighbor.isVisited()) {
        recursiveTraverse(neighbor);
      }
    });
  }

  private void test() {
    final Node<Integer> v0 = new Node<>(0);
    final Node<Integer> v1 = new Node<>(1);
    final Node<Integer> v2 = new Node<>(2);
    final Node<Integer> v3 = new Node<>(3);
    final Node<Integer> v4 = new Node<>(4);
    final Node<Integer> v5 = new Node<>(5);
    final Node<Integer> v6 = new Node<>(6);

    v0.setNeighbors(List.of(v1, v5, v6));
    v1.setNeighbors(List.of(v3, v4, v5));
    v4.setNeighbors(List.of(v2, v6));
    v6.setNeighbors(List.of(v0));

    new DFS<Integer>().traverse(v0);
  }

  private void testRecursive() {
    final Node<Integer> v0 = new Node<>(0);
    final Node<Integer> v1 = new Node<>(1);
    final Node<Integer> v2 = new Node<>(2);
    final Node<Integer> v3 = new Node<>(3);
    final Node<Integer> v4 = new Node<>(4);
    final Node<Integer> v5 = new Node<>(5);
    final Node<Integer> v6 = new Node<>(6);

    v0.setNeighbors(List.of(v1, v5, v6));
    v1.setNeighbors(List.of(v3, v4, v5));
    v4.setNeighbors(List.of(v2, v6));
    v6.setNeighbors(List.of(v0));

    new DFS<Integer>().recursiveTraverse(v0);
  }

  public static void main(final String[] args) {
    final DFS<Integer> dfs = new DFS<>();
    dfs.test();
    System.out.println("==================================");
    dfs.testRecursive();
  }

}
