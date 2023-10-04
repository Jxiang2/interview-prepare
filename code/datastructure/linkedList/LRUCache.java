package code.datastructure.linkedList;

import java.util.HashMap;
import java.util.Map;

// Least Recently Used (LRU) cache
// use DoubleLinkedList beacuse:
// 1. add and delete are O(1) for LinkedList
// 2. need to refer to both head and tail nodes, so need to use DoubleLinkedList
public class LRUCache<K, V> {

  static class Node<K, V>  {
    K key;
    V value;
    Node<K, V> prev;
    Node<K, V> next;
  }

  Map<K, Node<K, V>> nodeMap;
  int cacheCapacity;

  // head and tail are dummy nodes, they should not be removed
  final Node<K, V> head = new Node<K, V>();
  final Node<K, V> tail = new Node<K, V>();

  public LRUCache(int capacity) {
    this.nodeMap = new HashMap<K, Node<K, V>>();
    this.cacheCapacity = capacity;

    head.next = tail;
    tail.prev = head;
  }

  public V get(K key) {
    Node<K, V> node = nodeMap.get(key);

    if (node == null) {
      return null;
    }

    remove(node);
    add(node);

    return node.value;
  }

  public void put(K key, V value) {
    Node<K, V> node = nodeMap.get(key);
    if (node != null) { // node is "accessed"
      node.value = value;
      remove(node);
      add(node);
    } else {
      if (nodeMap.size() == cacheCapacity) {
        nodeMap.remove(tail.prev.key);
        remove(tail.prev);
      }

      Node<K, V> newNode = new Node<K, V>();
      newNode.key = key;
      newNode.value = value;

      nodeMap.put(key, newNode);
      add(newNode);
    }
  }


  /**
   * Add new node to the head of the list
   * @param node
   */
  private void add(Node<K, V> node) {
    Node<K, V> headNext = head.next;

    head.next = node;
    node.prev = head;

    node.next = headNext;
    headNext.prev = node;
  }

  private void remove(Node<K, V> node) {
    Node<K, V> nextNode = node.next;
    Node<K, V> prevNode = node.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  public static void main(String[] args) {
    LRUCache<Integer, Integer> cache = new LRUCache<Integer, Integer>(2);
    cache.put(1, 1);
    cache.put(2, 2);
    System.out.println(cache.get(1)); // returns 1
    cache.put(3, 3); // evicts key 2
    System.out.println(cache.get(2)); // returns null (not found)
    cache.put(4, 4); // evicts key 1
    System.out.println(cache.get(1)); // returns null (not found)
    System.out.println(cache.get(3)); // returns 3
    System.out.println(cache.get(4)); // returns 4
  }

}
