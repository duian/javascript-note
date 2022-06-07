package algorithm.javaProject.src.com.company;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class ListExercise {

  public static <AnyType> void printLots(List<AnyType> L, List<Integer> P) {
    Iterator<AnyType> iterL = L.iterator();
    Iterator<Integer> iterP = P.iterator();

    AnyType itemL = null;
    Integer itemP = 0;
    int start = 0;

    while (iterL.hasNext() && iterP.hasNext()) {
      itemP = iterP.next();

      System.out.println("Looking for position " + itemP);

      while (start < itemP && iterL.hasNext()) {
        start++;
        itemL = iterL.next();
      }
      System.out.println(itemL);
    }
  }

  public static <AnyType extends Comparable<? super AnyType>> void intersection(List<AnyType> L1, List<AnyType> L2, List<AnyType> Intersect) {
    ListIterator<AnyType> iterL1 = L1.listIterator();
    ListIterator<AnyType> iterL2 = L2.listIterator();

    AnyType itemL1 = null, itemL2 = null;
    if (iterL1.hasNext() && iterL2.hasNext()) {
      itemL1 = iterL1.next();
      itemL2 = iterL2.next();
    }

    while (itemL1 != null && itemL2 != null) {
      int compareResult = itemL1.compareTo(itemL2);
      if (compareResult == 0) {
        Intersect.add(itemL1);
        itemL1 = iterL1.hasNext() ? iterL1.next() : null;
        itemL2 = iterL2.hasNext() ? iterL2.next() : null;
      } else if (compareResult < 0) {
        itemL1 = iterL1.hasNext() ? iterL1.next() : null;
      } else {
        itemL2 = iterL2.hasNext() ? iterL2.next() : null;
      }
    }
  }

  public static <AnyType extends Comparable<? super AnyType>> void union(List<AnyType> L1, List<AnyType> L2, List<AnyType> Union) {
    ListIterator<AnyType> iterL1 = L1.listIterator();
    ListIterator<AnyType> iterL2 = L2.listIterator();

    AnyType itemL1 = null, itemL2 = null;

    if (iterL1.hasNext() && iterL2.hasNext()) {
      itemL1 = iterL1.next();
      itemL2 = iterL2.next();
    }

    while (itemL1 != null && itemL2 != null) {
      int compareResult = itemL1.compareTo(itemL2);

      if (compareResult == 0) {
        Union.add(itemL1);
        itemL1 = iterL1.hasNext() ? iterL1.next() : null;
        itemL2 = iterL2.hasNext() ? iterL2.next() : null;
      } else if (compareResult < 0) {
        Union.add(itemL1);
        itemL1 = iterL1.hasNext() ? iterL1.next() : null;
      } else {
        Union.add(itemL2);
        itemL2 = iterL2.hasNext() ? iterL2.next() : null;
      }
    }
  }



  public static void josephus(List<Integer> N, int M) {
    ListIterator<Integer> iter = N.listIterator();
    if (iter.hasNext()) {
      int item = iter.next();
    }
    while ( N.size() == 1) {
      for (int count = 0; count < M; count++) {
        if (count != M) {
          int item = iter.hasNext() ? iter.next() : null;
        } else {

        }
      }
    }
  }
}
