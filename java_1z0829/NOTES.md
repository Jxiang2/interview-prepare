# 1Z0-829 Java 17 Certification

## Exception handling

```java
private static String s;
public static void main(String[] args) {
    try {
        System.out.println(s.length());
    } catch(NullPointerException | RuntimeException ex)
    {
        System.out.println("DONE");
    }
}
```

- **Result**: Compilation error
- **Reason**: NullPointerException is a subclass of RuntimeException, so it is not allowed to catch both of them in the same catch block.

```java
public static void main(String[] args) {
        try {
            check();
        } catch(RuntimeException e) {
            System.out.println(e.getClass()
                             .getName()); //Line n1
        }
    }

private static void check() {
    try {
        RuntimeException re = new RuntimeException(); //Line n2
        throw re; //Line n3
    } catch(RuntimeException e) {
        System.out.println(1);
        ArithmeticException ex = (ArithmeticException) e; // Line n4
        System.out.println(2);
        throw ex;
    }
}
```

- **Result**:
  1

  java.lang.ClassCastException

- **Reason**: n3 throws an exception instance, caught by the catch block. n4 throws java.lang.ClassCastException, because:
  - You can try to convert the super class variable to the sub class type by simply using the cast operator. But, first of all you need to create the super class reference using the sub class object and then, convert this (super) reference type to sub class type using the cast operator.
  - The exception in catch block is auto-thrown to the caller of the method

```java
public class A {
    private static class B {
        private void log() {
            System.out.println("BE THE CHANGE");
        }
    }
    public static void main(String[] args) {
        var obj = new A.B(); // way 1
        B obj = new B(); // way 2
        A.B obj = new A.B(); // way 3
    }

    // ============================

    private class B {
        private void log() {
            System.out.println("BE THE CHANGE");
        }
    }
    public static void main(final String[] args) {
        /* INSERT */
        final A a = new A();

        final B b = a.new B(); // way 1
        final A.B b = a.new B(); // way 2

        b.log();
  }
}
```

- **Checkpoint** Within the top-level class, a static nested class's name can be referred by 3 ways: `TOP-LEVEL-CLASS.STATIC-NESTED-CLASS` or `STATIC-NESTED-CLASS` or `var`.
- **Checkpoint** Outer classes can access inner classes' private members

```java
public static void main(String[] args) {
    String s1 = new String("ALL IS WELL"); //Line n1
    String s2 = new String("ALL IS WELL"); //Line n2
    System.out.println(s1 == s2); //Line n3

    // How to change this code to print true?
}
```

- **Result**:
  - Replace Line n1 with: String s1 = "ALL IS WELL"; Replace Line n2 with: String s2 = "ALL IS WELL";
  - Replace Line n1 with String s1 = new String("ALL IS WELL").intern(); Replace Line n2 with String s2 = new String("ALL IS WELL").intern();
  - Replace Line n2 with: String s2 = s1.toString(); Because definition of toString() method in String class returns the same String object.

```java
public static void main(String[] args) {
    String text = "    BE YOURSELF!    "; //Contains multiple space characters
    System.out.println(text./*INSERT*/);

    // compile successfully and on execution will print "BE YOURSELF!" on to the console?
}
```

- **Result**:
  - Replace INSERT with: trim() (work with space)
  - Replace INSERT with: strip() (work with whitespace)
  - Replace INSERT with: stripLeading().stripTrailing() (work with whitespace)

```java

```

- **Checkpoint:**
  - type widening: byte -> short -> int -> long -> float -> double, no data loss, no explicit casting
  - type narrowing: double -> float -> long -> int -> short -> byte, data loss, explicit casting required
  - char data type is from 0 to 65535
  - char has the same size as short, 16 bits
