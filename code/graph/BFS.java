package code.graph;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/**
 * Depth-first search.
 * use a queue
 */
public class BFS<T> {

  private final Node<T> root;

  public BFS(final Node<T> root) {
    this.root = root;
  }

  public void traverse() {
    final Queue<Node<T>> queue = new LinkedList<>();

    queue.add(root);

    while (!queue.isEmpty()) {
      final Node<T> node = queue.remove();

      if (!node.isVisited()) {
        node.setVisited(true);

        // Process ...
        System.out.println(node);

        node.getNeighbors().forEach(queue::add);
      }
    }
  }

  public static void main(final String[] args) {
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

    new BFS<Integer>(v1).traverse();
  }
}
