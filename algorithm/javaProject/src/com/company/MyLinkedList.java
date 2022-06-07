package algorithm.java-project.src.com.company;

public class MyLinkedList<AnyType> implements Iterable<AnyType> {
  private static class Node<AnyType> {
    public Node(AnyType d, Node<AnyType> p, Node<AnyType> n) {
      data = d;
      prev = p;
      next = n;
    }

    public AnyType data;
    public Node<AnyType> prev;
    public Node<AnyType> next;
  }

  public void MyLinkedList() {
    doClear();
  }

  public void clear() {
    beginMarker = new Node<AnyType>(null, null, null);
    endMarker = new Node<AnyType>(null, beginMarker, null);
    beginMarker.next = endMarker;

    theSize = 0;
    modCount++;
  }

  public int size() {
    return theSize;
  }

  public boolean isEmpty() {
    return size() == 0;
  }

  public boolean add(AnyType x) {
    add(size(), x);
    return true;
  }

  public void add(int idx, AnyType x) {
    addBefore(getNode(idx, 0, size()), x);
  }

  public AnyType get(int idx) {
    return getNode(idx).data;
  }

  public AnyType set(int idx, AnyType newVal) {
    AnyType node = getNode(idx);
    AnyType oldVal = node.data;
    node.data = newVal;
    return oldVal;
  }

  public AnyType remove(int idx) {
    return remove(remove(getNode(idx)));
  }

  public boolean containers(AnyType x) {
    Node<AnyType> p = beginMarker.next;
    while (p != endMarker && !(p.data.equals(x))) {
      p = p.next;
    }

    return (p != endMarker);
  }

  private void addBefore(Node<AnyType> p, AnyType x) {
    Node<AnyType> newNode = new Node(x, p.prev, p);
    newNode.prev.next = newNode;
    p.prev = newNode;
    theSize++;
    modCount++;
  }

  private AnyType remove(Node<AnyType> p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;
    theSize--;
    modCount--;

    return p.data;
  }

  private Node<AnyType> getNode(int idx) {
    return getNode(idx, 0, size() - 1);
  }

  private Node<AnyType> getNode( int idx, int lower, int upper) {
    Node<AnyType> p;

    if (idx < lower || idx > upper) {
      throw new IndexOutOfBoundsException();
    }
    if (idx < size() / 2) {
      p = beginMarker.next;
      for (int i = 0; i < idx; i++) {
        p = p.next;
      }
    } else {
      p = endMarker;
      for (int i = size(); i > idx; i--) {
        p = p.prev;
      }
    }

    return p;
  }


  private int theSize;
  private int modCount = 0;
  private Node<AnyType> beginMarker;
  private Node<AnyType> endMarker;
}
