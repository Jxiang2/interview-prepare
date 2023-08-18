package code.graph.dijkstra;

import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Set;
import java.util.Map.Entry;
import java.util.Objects;
import java.util.stream.Collectors;

public class Dijkstra {

  public void calculateShortestPaths(final Vertex source) {
    source.setDistance(0);
    final Set<Vertex> explored = new HashSet<>();
    final Queue<Vertex> toExplore = new PriorityQueue<>(Collections.singleton(source));

    while (!toExplore.isEmpty()) {
      final Vertex current = toExplore.poll();

      for (final Entry<Vertex, Integer> adj : current.getAdjacentVertices().entrySet()) {
        final Vertex neighbor = adj.getKey();
        final int distanceToNeighbor = adj.getValue();
        if (!explored.contains(neighbor)) {
          evaluateDistnaceAndPath(current, neighbor, distanceToNeighbor);
          toExplore.add(neighbor);
        }
      }

      explored.add(current);
    }
  }

  private void evaluateDistnaceAndPath(
      final Vertex from,
      final Vertex to,
      final Integer edgeWeight) {
    final int newDistance = from.getDistance() + edgeWeight;

    if (newDistance < to.getDistance()) {
      to.setDistance(newDistance);

      final List<Vertex> newShortestPath = new LinkedList<>();
      newShortestPath.addAll(from.getShortestPath());
      newShortestPath.add(from);
      to.setShortestPath(newShortestPath);
    }
  }

  public void printPaths(final List<Vertex> Vertexs) {
    Vertexs.forEach(v -> {
      final String path = v.getShortestPath().stream()
          .map(Vertex::getName).map(Objects::toString)
          .collect(Collectors.joining(" -> "));
      System.out.println((path.isBlank()
          ? "%s : %s".formatted(v.getName(), v.getDistance())
          : "%s -> %s : %s".formatted(path, v.getName(), v.getDistance())));
    });
  }

  public static void main(final String[] args) {
    final Vertex a = new Vertex("A");
    final Vertex b = new Vertex("B");
    final Vertex c = new Vertex("C");
    final Vertex d = new Vertex("D");
    final Vertex e = new Vertex("E");
    final Vertex f = new Vertex("F");

    a.addAdjacentVertex(b, 2);
    a.addAdjacentVertex(c, 4);

    b.addAdjacentVertex(c, 3);
    b.addAdjacentVertex(d, 1);
    b.addAdjacentVertex(e, 5);

    c.addAdjacentVertex(d, 2);

    d.addAdjacentVertex(e, 1);
    d.addAdjacentVertex(f, 4);

    e.addAdjacentVertex(f, 2);

    final Dijkstra dijkstra = new Dijkstra();
    dijkstra.calculateShortestPaths(a);
    dijkstra.printPaths(List.of(a, b, c, d, e, f));

  }

}
