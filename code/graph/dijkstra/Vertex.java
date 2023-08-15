package code.graph.dijkstra;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class Vertex implements Comparable<Vertex> {

  private int distance = Integer.MAX_VALUE;

  private String name;
  // shortest path from source to the current vertex, without the current vertex
  private List<Vertex> shortestPath = new LinkedList<>();
  // adjacent vertex --> distance to the adjacent vertex from the current vertex
  private Map<Vertex, Integer> adjacentVertices = new HashMap<>();

  public void addAdjacentVertex(final Vertex vertex, final int distance) {
    adjacentVertices.put(vertex, distance);
  }

  @Override
  public int compareTo(final Vertex other) {
    return Integer.compare(this.distance, other.distance);
  }

  // constructor

  public Vertex(final String name) {
    this.name = name;
  }

  // getters and setters

  public String getName() {
    return name;
  }

  public void setName(final String name) {
    this.name = name;
  }

  public int getDistance() {
    return distance;
  }

  public void setDistance(final int distance) {
    this.distance = distance;
  }

  public List<Vertex> getShortestPath() {
    return shortestPath;
  }

  public void setShortestPath(final List<Vertex> shortestPath) {
    this.shortestPath = shortestPath;
  }

  public Map<Vertex, Integer> getAdjacentVertices() {
    return adjacentVertices;
  }

  public void setAdjacentVertices(final Map<Vertex, Integer> adjacentVertices) {
    this.adjacentVertices = adjacentVertices;
  }

}
