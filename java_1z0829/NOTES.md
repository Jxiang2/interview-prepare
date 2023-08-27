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

```java
public static void main(String[] args) {
    final String fName = "James";
    String lName = "Gosling";
    String name1 = fName + lName; // lname is computed at runtime, so name1 is computed at runtime too
    String name2 = fName + "Gosling";
    String name3 = "James" + "Gosling"; // fname is final, so it is a compile time constant, String literal is also a compile time constant, so name3 is computed at compile time
    System.out.println(name1 == name2);
    System.out.println(name2 == name3);
}
```

- **Result:** false, true
- **Reason:** name1 is not a compile time constant, so it is not interned. name2 and name3 are compile time constants, so they are interned. **Please note** that Strings computed by concatenation at run time (if the resultant expression is not constant expression) are newly created and therefore distinct.

```java
public static void main(String[] args) {
    m1(null);
}

static void m1(CharSequence s) {
    System.out.println("CharSequence");
}

static void m1(String s) {
    System.out.println("String");
}

static void m1(Object s) {
    System.out.println("Object");
}
```

- **Result:** String
- **Reason:** String is a subclass of CharSequence, so it is the most specific type
- **Note:** Method overloading is resolved at compile time, so the method with most specific args is chosen at compile time, in this case, **m1(String s)**; If two methods are equally specific, then the method with more specific return type is chosen, if the return type is also equally specific, then it is a compile time error.

```java
var x = 7, y = 200;
```

- **Result:** Compilation error, var can't be used in multiple variable declaration, only primitive type or reference type is allowed
- **Note:** str.replace returns the same String object if no replacement is done, for example, replace "J" with "J" will return the same String object

```java
String [] arr1 = {null, null};
System.out.println("1. " + String.join("::", arr1)); // 1. null::null

String [] arr2 = {};
System.out.println("2. " + String.join("-", arr2)); // 2.

String [] arr3 = null;
System.out.println("3. " + String.join(".", arr3)); // NullPointerException at runtime

System.out.println("4. " + String.join(".", null)); // NullPointerException at compile time
```

```java
 "JAva".substring(0, 1000); // StringIndexOutOfBoundsException (runtime)

var sb = new StringBuilder("Friends are treasures");
sb.delete(0, 100); // no exception, end index is equivalent to length of "Friends are treasures"
System.out.println(sb.length());
```

```java
var sb = new StringBuilder();
System.out.println(sb.append(null).length());
```

** Result: ** Compilation error, because append() method is overloaded, one of them takes a String, the other takes a char[], so the compiler can't decide which one to use

```java
var sb = new StringBuilder(20); //Line n1
sb.append("A".repeat(25)); //Line n2
System.out.println(sb.toString().length()); //Line n3 => 25

sb.setLength(10); //Line n4
System.out.println(sb.toString().length()); //Line n5 => 10
```

```java
/*INSERT*/
int day = '3';
switch(day) {
    case '3':
        System.out.println("BUY 2 GET 1 FREE");
        break;
    default:
        System.out.println("SORRY!!! NO SALE");
}// Note: char is compatible with int, so '3' is equivalent to 51, but it's not integer three. This comaptibility only works for primitive type, not wrapper type
```

**Note:** switch can accept primitive types: byte, short, int, char; wrapper types: Byte, Short, Integer, Character; String and enums. Boolean or boolean is not allowed.

```java
var amount = 1000;
var curr = CURRENCY.DOLLAR;

// Wrong version
switch (curr) {
    case DOLLAR:
        String sign = "$";
        System.out.println(sign + amount);
    case POUND:
        String sign = "£";
        System.out.println(sign + amount);
    case YEN:
        String sign = "¥";
        System.out.println(sign + amount);

}

// Correct version
switch (curr) {
    case DOLLAR: {
        String sign = "$";
        System.out.println(sign + amount);
    }
    case POUND: {
        String sign = "£";
        System.out.println(sign + amount);
    }
    case YEN: {
        String sign = "¥";
        System.out.println(sign + amount);
    }
}
```

**Result:** Compilation error
**Reason:** Statement inside case labels are within the same scope, which means variable 'sign' created inside 1st case is in scope for other cases as well. This causes compilation error.

```java
When you use the switch expression (which returns some value), there are few things to keep in mind:

1. All the cases must be exhaustive and non-duplicate, which means it should cater to all the input values without any overlap.

In this case,

1st case handles 1,3,5,7,9

2nd case handles 0,2,4,6,8

default handles all the other int values.



2. With -> there is no fall-through semantics, therefore break; is not used here. Using break; with switch expression (which returns some value) causes compilation error.



3. It must end with a semicolon.

// A valid exapmple would be:
public static void main(String[] args) {
    var x = 5;
    var msg = switch(x) {
        case 1,3,5,7,9 -> "Odd Number";
        case 0,2,4,6,8 -> "Even Number";
        default -> "Not in range";
    }; //NOTE semicolon here
    System.out.println(msg);
}

// Old and new switch-case syntaxes can be mixed but mixing of colon [:] and arrow [->] is not allowed.
var a = 5;
var x = "+";
switch(x) {
    case "+" -> a = a + 2; //Line n1
    case "-" -> { a = a - 3; break; } //Line n2
    case "/" -> a = a / 4; //Line n3
    case "*" : a = a * 3; //Line n4 => Compilation error
}
System.out.println(a);
```
