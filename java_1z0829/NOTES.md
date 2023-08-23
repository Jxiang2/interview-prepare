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
  - Java explicit Numberic operations result type is the wider type of the two operands
  - ++, --, +=, -=, \*=, /=, %=, result type is the type of the left operand
  - char data type is from 0 to 65535
  - char has the same size as short, 16 bits

```java
public static void main(String[] args) {
    m(1);
}

private static void m(Object obj) {
    System.out.println("Object version");
}

private static void m(Number obj) {
    System.out.println("Number version");
}

private static void m(Double obj) {
    System.out.println("Double version");
}
```

- **Result**: Number version
- **Reason**: Compiler either does implicit casting or Wrapping but not both. 1 is int literal, Java compiler can't implicit cast it to double and then box it to Double rather it boxes i to Integer and as Number is the immediate super class of Integer so Number version refers to Integer object.

```java
public static void main(String[] args) {
    extractInt(2.7);
    extractInt(2);
}

private static void extractInt(Double obj) {
    System.out.println(obj.intValue());
}
```

- **Result**: Compilation error in main method
- **Reason**: Compiler either does implicit casting or Wrapping but not both. 2.7 is double literal, Java compiler can't implicit cast it to int and then box it to Integer rather it boxes it to Double and as Double is not the sub class of Number so extractInt(Double obj) method can't be invoked.

```java

```

- **Checkpoint:**
  - Math.random() returns x, where 0.0 <= x < 1.0
  - Math.round() returns long, but Math.floor() & Math.ceil() returns double

```java
class A {
    public String toString() {
        return null;
    }
}
public class Test {
    public static void main(String [] args) {
        String text = null;
        text = text + new A(); //Line n1
        System.out.println(text.length()); //Line n2
    }
}
```

- **Result**: 8
- **Reason**: text + new A() is equivalent to text + new A().toString(), which is null + null since they are both defined as String, not direct null; So the result is "nullnull", which has length 8

```java
public static void main(String [] args) {
    String text = "RISE ";
    text = text + (text = "ABOVE ");
    System.out.println(text);
}
```

- **Result:** RISE ABOVE
- **Reason:** text + (text = "ABOVE ") is equivalent to text + text = "ABOVE ", which is "RISE " + "ABOVE ", which is "RISE ABOVE "
- **Note:**
  - left operand is evaluated first, then right operand
  - bitwise operators are evaluated before logical operators

```java

```

- **Checkpoint:** LocalTime.MIN --> {00:00}, LocalTime.MAX --> {23:59:59.999999999}, LocalTime.MIDNIGHT --> {00:00}, LocalTime.NOON --> {12:00}.

```java
public static void main(String [] args) {
        LocalDate date = LocalDate.parse("2000-01-01");
        Period period = Period.ofYears(-3000);
        System.out.println(date.plus(period));
    }
```

- **Result:** -1000-01-01

```java
public static void main(String [] args) {
    LocalDate date = LocalDate.parse("1983-06-30");
    System.out.println(date.plusMonths(8));
}

// NOTE
Period.of(int years, int months, int days) // => Returns a Period instance with specified number of years, months and days.

Period.ofDays(int days) // => Returns a Period instance with specified number of days.
Period.ofWeeks(int weeks) // => Returns a Period instance with specified number of days.

Period.ofMonths(int months) // => Returns a Period instance with specified number of months.

Period.ofYears(int years) // => Returns a Period instance with specified number of years.

// NOTE
Duration.ofDays(long days) // => Returns a Duration instance with specified number of days converted to hours. -2 days equals to -48 hours.

Duration.ofHours(long hours) // => Returns a Duration instance with specified number of hours.

Duration.ofMinutes(long minutes) // => Returns a Duration instance with specified number of minutes.

Duration.ofSeconds(long seconds) // => Returns a Duration instance with specified number of seconds, nanos field is set to 0. NOTE: if nanos field is 0, toString ignores it.

Duration.ofMillis(long millis) // => Returns a Duration instance with passed value converted to seconds and nano seconds.

Duration.ofNanos(long nanos) // => Returns a Duration instance with passed value converted to seconds and nano seconds.


```

- **Result:** 1983-06-30 plus 8 months would result in the invalid date 1984-02-30. Instead of returning an invalid result, the last valid day of the month, 1984-02-29, is returned. Please note, 1984 is leap year and hence last day of February is 29 and not 28.

- **Checkpoint:**
  - LocalDate.ofEpochDay(0) ==> 1970-01-01, arg can be negative
  - LocalDate.ofYearDay(2023, 0) ==> 2nd arg is from 1 to 365/366, or runtime exception
  - Period represents date based amount of time, Duration represents time based amount of time
