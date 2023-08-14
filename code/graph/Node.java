package code.graph;

import java.util.ArrayList;
import java.util.List;

public class Node<T> {

  private T data;

  private boolean isVisited = false;

  private List<Node<T>> neighbors = new ArrayList<>();

  public Node(final T data) {
    this.data = data;
  }

  @Override
  public String toString() {
    return "Node [data=" + data + "]";
  }

  public T getData() {
    return data;
  }

  public void setData(final T data) {
    this.data = data;
  }

  public boolean isVisited() {
    return isVisited;
  }

  public void setVisited(final boolean isVisited) {
    this.isVisited = isVisited;
  }

  public List<Node<T>> getNeighbors() {
    return neighbors;
  }

  public void setNeighbors(final List<Node<T>> neighbors) {
    this.neighbors = neighbors;
  }

}
